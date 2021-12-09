import React from "react";
import useCanvas from '../../hooks/useCanvas';

type CanvasProps = {
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void,
    handleResize?: (context: CanvasRenderingContext2D) => void
}

const Canvas: React.FC<CanvasProps> = (props: CanvasProps) => {
    const { draw, handleResize } = props;   
    const canvasRef = useCanvas(draw, handleResize);

    return <canvas ref={canvasRef} />
}

export default Canvas;