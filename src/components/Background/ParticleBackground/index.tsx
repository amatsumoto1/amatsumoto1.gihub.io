import React from 'react';
import Canvas from '../../Canvas';
import { getRandBetween, getRandSign } from '../../../utils/Random';

const BACKGROUND_COLOR = '#2E5175';
const PARTICLE_COLORS = [
    '#8E5E52',
    '#8E7F52',
    '#868E52',
    '#5D8959',
    '#598984',
    '#686E8C',
    '#927D8F'
];

type Particle  = {
    color: string,
    x: number,
    y: number,
    vx: number,
    vy: number
}

const ParticleBackground: React.VFC = () => {
    const particles: Particle[] = [];

    const createParticle =  (width: number, height: number): Particle => {
        return {
            color: getRandomColor(),
            x: getRandBetween(0, width),
            y: getRandBetween(0, height),
            vx: getRandSign() * getRandomVelocity(),
            vy: getRandSign() * getRandomVelocity()
        } as Particle;
    }

    const initAllParticles = (width: number, height: number) => {
        const totalParticles = getNumParticles(width, height);
        for (let i = 0; i < totalParticles; i++) {
            particles.push(createParticle(width, height));
        }
    }

    const updateParticle = (particle: Particle, width: number, height: number) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x >= width || particle.x <= 0) {
            particle.vx = -Math.sign(particle.vx) * getRandomVelocity();
        }

        if (particle.y >= height || particle.y <= 0) {
            particle.vy = - Math.sign(particle.vy) * getRandomVelocity();
        }
    }

    const drawParticle = (context: CanvasRenderingContext2D, particle: Particle) => {
        const { color, x, y } = particle;
        context.beginPath();
        context.shadowBlur = 10;
        context.shadowColor = color;
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
        context.strokeStyle = color;
        context.stroke();

    }

    const drawCanvas = (context: CanvasRenderingContext2D, _: number) => {
        const canvas = context.canvas;
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        if (!particles.length) {
            initAllParticles(canvas.width, canvas.height);
        }

        for (const particle of particles) {
            updateParticle(particle, canvas.width, canvas.height);
            drawParticle(context, particle);
        }
    }

    const handleResize = (context: CanvasRenderingContext2D) => {
        const { width, height } = context.canvas;
        const totalParticles = getNumParticles(width, height);
        const currentParticles = particles.length;
        if (currentParticles > totalParticles) {
            for (let i = currentParticles; i > totalParticles; i--) {
                particles.pop();
            }
        }
        else {
            for (let i = currentParticles; i < totalParticles; i++) {
                particles.push(createParticle(width, height));
            }
        }
    }

    const getRandomVelocity = (): number => {
        return getRandBetween(0.5, 1.5);
    }

    const getRandomColor = (): string => {
        return PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    }

    const getNumParticles = (canvasWidth: number, canvasHeight: number) => {
        const area = canvasWidth * canvasHeight;

        return Math.ceil(area / 5000);
    }

    return (
        <Canvas draw={drawCanvas} onResize={handleResize}/>
    );
}

export default ParticleBackground;