export const getRandBetween = (lower: number, upper: number) => {
    return Math.random() * (upper - lower) + lower;
}

export const getRandIntBetween = (lower: number, upper: number) => {
    return Math.floor(Math.random() * (upper - lower) + lower);
}

export const getRandSign = () => {
    return Math.random() > 0.5 ? -1 : 1;
}