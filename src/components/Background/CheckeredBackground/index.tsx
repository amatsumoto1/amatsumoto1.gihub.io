import React from 'react';
import Canvas from '../../Canvas';
import { Vec2 } from '../../../utils/Math';
import { getRandIntBetween } from '../../../utils/Random';

const BACKGROUND_COLOR = '#000000';

enum Direction {
  TOP,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  LEFT,
  TOP_LEFT
}

const CheckeredBackground: React.VFC = () => {
  let direction: Direction = Direction.TOP;

  let center: Vec2 = new Vec2(0, 0);
  let squareLength: number;
  let colorAngle = getRandIntBetween(0, 45);
  let colorOffset = 0;
  let colNumber = 0;

  const getSquareEdgeWidth = ({width, height}: HTMLCanvasElement): number => {
    const minSide = Math.min(width, height);
    return minSide / 20;
  }

  const drawSquare = (context: CanvasRenderingContext2D) => {
    context.fillStyle = (colNumber % 2 === colorOffset) ? getLightColor() : getDarkColor();
    context.fillRect(center.x, center.y, squareLength, squareLength);
  }

  const update = (canvas: HTMLCanvasElement) => {
    switch(direction) {
      case Direction.TOP:
        updateTop(canvas);
        break;
      case Direction.RIGHT:
        updateRight(canvas);
        break;
      case Direction.BOTTOM:
        updateBottom(canvas);
        break;
      case Direction.LEFT:
        updateLeft(canvas);
        break;
      default:
        break;
    }
  }

  const updateTop = ({width, height}: HTMLCanvasElement) => {
    center.x += squareLength;
    colNumber++;
    if (center.x > width) {
      center.x = 0;
      center.y += squareLength;
      toggleColorOffset();
      if (center.y > height) {
        direction = Direction.RIGHT;
        center = new Vec2(width - squareLength, 0);
        updateColorAngle();
      }
    }
  }

  const updateRight = ({width, height}: HTMLCanvasElement) => {
    center.y += squareLength;
    colNumber++;
    if (center.y > height) {
      center.y = 0;
      center.x -= squareLength;
      toggleColorOffset();
      if (center.x <= -squareLength) {
        direction = Direction.BOTTOM;
        center = new Vec2(width - squareLength, height - squareLength);
        updateColorAngle();
      }
    }
  }

  const updateBottom = ({width, height}: HTMLCanvasElement) => {
    center.x -= squareLength;
    colNumber++;
    if (center.x <= -squareLength) {
      center.x = width - squareLength;
      center.y -= squareLength;
      toggleColorOffset();
      if (center.y <= -squareLength) {
        direction = Direction.LEFT;
        center = new Vec2(0, height - squareLength);
        updateColorAngle();
      }
    }
  }

  const updateLeft = ({width, height}: HTMLCanvasElement) => {
    center.y -= squareLength;
    colNumber++;
    if (center.y <= -squareLength) {
      center.y = height - squareLength;
      toggleColorOffset();
      center.x += squareLength;
      if (center.x >= width) {
        direction = Direction.TOP;
        center = new Vec2(0, 0);
        updateColorAngle();
      }
    }
  }


  const drawCanvas = (context: CanvasRenderingContext2D, frameCount: number) => {
    const canvas = context.canvas;

    if (frameCount <= 1) {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = BACKGROUND_COLOR;
      context.fillRect(0, 0, canvas.width, canvas.height);
      squareLength = getSquareEdgeWidth(canvas);
    }
        
    drawSquare(context);
    if (frameCount % 2 === 1) {
      update(canvas);
    } 
  }

  const getLightColor = () => {
    return `hsl(${colorAngle}, 50%, 10%)`;
  }

  const getDarkColor = () => {
    return `hsl(${(colorAngle+180)%360}, 25%, 10%)`;
  }

  const updateColorAngle = () => {
    colorAngle = (colorAngle + getRandIntBetween(45, 90)) % 360;
  }

  const toggleColorOffset = () => {
    colNumber = 0;
    colorOffset = colorOffset === 0 ? 1 : 0;
  }

  return (
    <Canvas draw={drawCanvas} />
  );
}

export default CheckeredBackground;