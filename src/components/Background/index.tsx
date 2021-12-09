import React from 'react';
import Canvas from '../Canvas';
import './index.scss';

const BACKGROUND_COLOR = '#2E5175';
const PARTICLE_COLORS = [
    '#D788CB',
    '#EEC3C3',
    '#A7D3DA',
    '#F0F5B6',
    '#BBFAB2',
    '#F7C78E'
];

type Particle  = {
    color: string,
    x: number,
    y: number,
    vx: number,
    vy: number
}

const Background: React.VFC = () => {
    const particles: Particle[] = [];

    const createParticle =  (width: number, height: number): Particle => {
        return {
            color: getRandomColor(),
            x: Math.random() * width,
            y: Math.random() * height,
            vx: getRandomDirection() * getRandomVelocity(),
            vy: getRandomDirection() * getRandomVelocity()
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
        return (Math.random() * 0.5 + 0.5);
    }

    const getRandomDirection = (): number => {
        return (Math.random() > 0.5 ? 1 : -1);
    }

    const getRandomColor = (): string => {
        return PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    }

    const getNumParticles = (canvasWidth: number, canvasHeight: number) => {
        const area = canvasWidth * canvasHeight;

        return Math.ceil(area / 8000);
    }

    return (
        <div className='background'>
            <Canvas draw={drawCanvas} handleResize={handleResize}/>
        </div>
    )
}

export default Background;