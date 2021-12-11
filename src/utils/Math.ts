export class Vec2 {
    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    add({x, y}: Vec2) {
        this.x += x;
        this.y += y;
    }

    getDisplacement({x, y}: Vec2): Vec2 {
        return new Vec2(x - this.x, y - this.y);
    }

    normalize() {
        const magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        if (magnitude) {
            this.x /= magnitude;
            this.y /= magnitude;
        }
    }
}