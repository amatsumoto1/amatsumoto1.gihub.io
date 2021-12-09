import React from "react";
import useCanvas from '../../hooks/useCanvas';

type CanvasProps = {
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void;
}

const Canvas: React.FC<CanvasProps> = (props: CanvasProps) => {
    const { draw } = props;   
    const canvasRef = useCanvas(draw);

    return <canvas ref={canvasRef} />
}

export default Canvas;