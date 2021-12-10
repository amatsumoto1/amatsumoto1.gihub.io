import { useRef, useEffect } from 'react';

export interface EventListeners {
    onResize?: (context: CanvasRenderingContext2D) => void,
    onClick?: (context: CanvasRenderingContext2D, event: MouseEvent) => void,
    onMouseMove?: (context: CanvasRenderingContext2D, event: MouseEvent) => void,
}

const useCanvas = (draw: (context: CanvasRenderingContext2D, frameCount: number) => void, listeners: EventListeners) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
    const { onResize, onClick, onMouseMove } = listeners;

    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            let ctx = canvasCtxRef.current;
            let frameCount = 0;
            let animationFrameId: number;

            const render = () => {
                if (ctx) {
                    frameCount++;
                    draw(ctx, frameCount);
                }
                animationFrameId = window.requestAnimationFrame(render);
            };

            render();

            return () => {
                window.cancelAnimationFrame(animationFrameId);
            };
        }
    }, [draw]);

    useEffect(() => {
        if (canvasCtxRef.current) {
            let handlers: any = {};

            let ctx = canvasCtxRef.current;

            if (onResize) {
                handlers['resize'] = () => {
                    onResize(ctx);
                }
            }

            if (onClick) {
                handlers['click'] = (e: MouseEvent) => {
                    onClick(ctx, e);
                }
            }
            
            if (onMouseMove) {
                handlers['mousemove'] = (e: MouseEvent) => {
                    onMouseMove(ctx, e);
                }
            }

            for (const eventName in handlers) {
                window.addEventListener(eventName, handlers[eventName]);
            }
        
            return () => {
                for (const eventName in handlers) {
                    window.removeEventListener(eventName, handlers[eventName]);
                }
            };
        }
    });

    return canvasRef;
}

export default useCanvas;