import React from "react";
import useCanvas from '../../hooks/useCanvas';

type CanvasProps = {
  draw: (context: CanvasRenderingContext2D, frameCount: number) => void,
  onResize?: (context: CanvasRenderingContext2D) => void,
  onClick?: (context: CanvasRenderingContext2D, event: MouseEvent) => void,
  onMouseMove?: (context: CanvasRenderingContext2D, event: MouseEvent) => void
}

const Canvas: React.FC<CanvasProps> = (props: CanvasProps) => {
  const { draw, ...rest } = props;   
  const canvasRef = useCanvas(draw, rest);

  return <canvas ref={canvasRef} />
}

export default Canvas;