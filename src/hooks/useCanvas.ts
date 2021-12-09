import { useRef, useEffect } from 'react';

const useCanvas = (draw: (context: CanvasRenderingContext2D, frameCount: number) => void, onResize?: (context: CanvasRenderingContext2D) => void) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);


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
        if (onResize && canvasCtxRef.current) {
            let ctx = canvasCtxRef.current;

            const handleResize = () => {
                onResize(ctx);
            }
            
            window.addEventListener('resize', handleResize);
        
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [onResize]);

    return canvasRef;
}

export default useCanvas;