import React from "react";
import Canvas from '../../Canvas';
import { getRandBetween, getRandSign } from '../../../utils/Random';

const BACKGROUND_COLOR = '#000000';

type Spiral = {
    centerX: number,
    centerY: number,
    colorAngle: number,
    iter: number,
    maxIter: number,
    increasing: boolean,
    multiplier: number,
}

const SpiralBackground: React.VFC = () => {
    let spirals: Spiral[] = [];


    const drawSpiral = (context: CanvasRenderingContext2D, spiral: Spiral) => {
        const { centerX, centerY, iter, multiplier, colorAngle } = spiral;
        const finalColorAngle = (colorAngle + multiplier * getRandBetween(0.5,2)) % 360;
        spiral.colorAngle = finalColorAngle;

        context.moveTo(centerX, centerY);
        context.lineWidth = 10;
        context.strokeStyle = `hsl(${finalColorAngle}, 30%, 15%)`;
        context.shadowBlur = 10;
        context.shadowColor= `hsl(${(finalColorAngle + getRandBetween(-2,2)) % 360}, 20%, 5%)`;
        context.beginPath();

        let radius = 0;
        let angle = 0;

        for (let n = 0; n < iter; n++) {
            radius += 0.05;
            angle += (multiplier) * (Math.PI * 2) / 400;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            context.lineTo(x, y);
        }

        context.stroke();
    }

    const updateSpirals = () => {
        const newSpirals = [];
        for (const spiral of spirals) {
            if (spiral.iter) {
                newSpirals.push(spiral);
            }
            spiral.increasing = spiral.increasing && spiral.iter < spiral.maxIter;
            if (spiral.increasing) {
                spiral.iter++;
            }
            else {
                spiral.iter--;
            }
        }

        spirals = newSpirals;
    }

    const initSpiral = (width: number, height: number) => {
        return {
            centerX: getRandBetween(10, width - 10),
            centerY: getRandBetween(10, height - 10), 
            colorAngle: getRandBetween(0, 360),
            iter: 1,
            maxIter: getRandBetween(1000, 4000),
            increasing: true,
            multiplier: getRandSign()
        };
    }

    const handleSpiralCount = (width: number, height: number) => {
        const spiralCount = spirals.length;
        const defaultSpiralCount = getDefaultSpiralCount(width, height);
        for (let i = spiralCount; i < defaultSpiralCount; i++) {
            spirals.push(initSpiral(width, height));
        }
    }
    
    const drawCanvas = (context: CanvasRenderingContext2D, frameCount: number) => {
        const canvas = context.canvas;
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, canvas.width, canvas.height);

        handleSpiralCount(canvas.width, canvas.height);

        updateSpirals();
        for (const spiral of spirals) {
            drawSpiral(context, spiral);
        }
    }

    const handleClick = (context: CanvasRenderingContext2D, e: MouseEvent) => {
        const rect = context.canvas.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        spirals.push({ 
            centerX: x,
            centerY: y,
            colorAngle: getRandBetween(0, 360),
            iter: 1, 
            maxIter: getRandBetween(1000, 4000),
            increasing: true,
            multiplier: getRandSign()
            }
        );
    }

    const getDefaultSpiralCount = (width: number, height: number) => {
        const area = width * height;

        return Math.ceil(area / 200000 + 1);
    }

    return (
        <Canvas draw={drawCanvas} onClick={handleClick}/>
    );
}

export default SpiralBackground;