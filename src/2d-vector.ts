// github:tom-weatherhead/pdchess3/src/2d-vector.ts

export class TwoDimensionalVector {
	public readonly nDX: number;
	public readonly nDY: number;

	constructor(dx: number, dy: number) {
		this.nDX = dx;
		this.nDY = dy;
	}
}
