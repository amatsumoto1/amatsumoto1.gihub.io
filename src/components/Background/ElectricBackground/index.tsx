import React from 'react';
import Canvas from '../../Canvas';
import { Vec2 } from '../../../utils/Math';
import { getRandBetween } from '../../../utils/Random';

type LightningSegment = {
    points: Vec2[];
}

type LightningBolt = {
    segments: LightningSegment[],
    thickness: number,
    opacity: number,
}

const BACKGROUND_COLOR = '#000000';
const NUM_SEGMENTS = 100;

const ElectricBackground: React.VFC = () => {
    let lightningBolts: LightningBolt[] = [];
    let lastManualBoltTime = Date.now();

    const createLightning = (canvas: HTMLCanvasElement, startX?: number, startY?: number): LightningBolt => {
        const { width, height } = canvas;
        const segmentHeight = height/NUM_SEGMENTS;
        const bolt: LightningBolt = {
            segments: [],
            thickness: 5,
            opacity: 1
        };
        startX = startX || getRandBetween(2, width - 2);
        startY = startY || 0;
        initSegments(bolt, new Vec2(startX, startY), 2, width - 2, getRandBetween(-2, 2), segmentHeight, height);

        return bolt;
    }

    const initSegments = (bolt: LightningBolt, start: Vec2, minWidth: number, maxWidth: number, offset: number, boltLength: number, height: number) => {
        const segment: LightningSegment = {points: [start]};
        let startX = start.x;
        let startY = start.y;
        while (startY < height) {
            if (segment.points.length && Math.random() < 0.01) {
                break;
            }
            const endY = startY + boltLength;
            const endX = Math.min(Math.max(startX + getRandBetween(-10 + offset, 10 + offset), minWidth), maxWidth);
            segment.points.push(new Vec2(endX, endY));
            startX = endX;
            startY = endY;
        }

        bolt.segments.push(segment);
        if (startY < height) {
            const nextStart = new Vec2(startX, startY);
            initSegments(bolt, nextStart, minWidth, startX + 2, -2, Math.max(boltLength - 1, 3), height);
            initSegments(bolt, nextStart, startX - 2, maxWidth, 2, Math.max(boltLength - 1, 3), height);
        }
    }
    
    const updateBolt = (bolt: LightningBolt) => {
        bolt.opacity -= 0.01;
        bolt.thickness -= 0.05;
        if (bolt.thickness <= 2) {
            bolt.segments.forEach(segment => segment.points[segment.points.length - 1].y -= 0.05);
        }
    }

    const updateAllBolts = () => {
        lightningBolts.forEach(updateBolt);
        lightningBolts = lightningBolts.filter(bolt => bolt.opacity > 0 && bolt.thickness > 0);
    }

    const drawSegment = (context: CanvasRenderingContext2D, segment: LightningSegment, thickness: number, opacity: number) => {
        const { points } = segment;
        const [ start, ...rest ] = points;
        context.beginPath();

        context.moveTo(start.x, start.y);
        context.lineWidth = thickness;
        context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        context.shadowBlur = 30;
        context.shadowColor = "#bd9df2";
        for (const {x, y} of rest) {
            context.lineTo(x, y);
        }

        context.stroke();
        context.closePath();
    }

    const drawBolt = (context: CanvasRenderingContext2D, bolt: LightningBolt) => {
        const { segments, thickness, opacity } = bolt;
        segments.forEach(segment => drawSegment(context, segment, thickness, opacity));
    }

    const drawCanvas = (context: CanvasRenderingContext2D, frameCount: number) => {
        const canvas = context.canvas;
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, canvas.width, canvas.height);

        if (frameCount % 200 === 0) {
            lightningBolts.push(createLightning(canvas));
        }
        updateAllBolts();
        lightningBolts.forEach(bolt => drawBolt(context, bolt));
    }

    const handleClick = (context: CanvasRenderingContext2D, e: MouseEvent) => {
        const rect = context.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        lastManualBoltTime = Date.now();
        lightningBolts.push(createLightning(context.canvas, x, y));
    }

    const handleMouseMove = (context: CanvasRenderingContext2D, e: MouseEvent) => {
        const currentTime = Date.now();
        if (currentTime - lastManualBoltTime > 500) {
            const rect = context.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            lastManualBoltTime = currentTime;
            lightningBolts.push(createLightning(context.canvas, x, y));
        }
    }

    return (
        <Canvas draw={drawCanvas} onClick={handleClick} onMouseMove={handleMouseMove} />
    )
}

export default ElectricBackground;