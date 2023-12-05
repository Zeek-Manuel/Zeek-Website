"use client"
function RemCalculator<T extends number>(unitInPixels: T): string {
    const pixelConstant = 16;
    return `${unitInPixels / pixelConstant}rem`;
}

export default RemCalculator;