import React from 'react';
import Canvas from '../Layout/Canvas';
import './index.scss';

const BACKGROUND_COLOR = '#2E5175';
const PARTICLE_COLOR1 = '#DACF77';
const PARTICLE_COLOR2 = '#6DB495';

type Particle  = {
    color: string,
    x: number,
    y: number,
    vx: number,
    vy: number
}

const Background: React.FC = (props) => {
    const particles: Particle[] = [];

    const createParticle =  (width: number, height: number): Particle => {
        return {
            color: (Math.random() > 0.5 ? PARTICLE_COLOR1 : PARTICLE_COLOR2),
            x: Math.random() * width,
            y: Math.random() * height,
            vx: getRandomDirection() * getRandomVelocity(),
            vy: getRandomDirection() * getRandomVelocity()
        } as Particle;
    }

    const initAllParticles = (width: number, height: number) => {
        for (let i = 0; i < 100; i++) {
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

    const drawCanvas = (context: CanvasRenderingContext2D, frameCount: number) => {
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

    const getRandomVelocity = (): number => {
        return (Math.random() * 0.5 + 0.5);
    }

    const getRandomDirection = (): number => {
        return (Math.random() > 0.5 ? 1 : -1);
    }

    return (
        <div className='background'>
            <Canvas draw={drawCanvas} />
        </div>
    )
}

export default Background;