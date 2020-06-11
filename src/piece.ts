// github:tom-weatherhead/pdchess3/src/piece.ts

import { PieceArchetype } from './piece-archetype';
import { PieceType } from './piece-type';
import { PlayerColour } from './player-colour';

export class Piece {
	public archetype: PieceArchetype;
	public readonly owner: PlayerColour;
	public row: number;
	public col: number;
	public captured: boolean;

	constructor(
		archetype: PieceArchetype,
		owner: PlayerColour,
		row: number,
		col: number,
		captured = false
	) {
		this.archetype = archetype;
		this.owner = owner;
		this.row = row;
		this.col = col;
		this.captured = captured;
	}

	public get isKing(): boolean {
		return this.archetype.pieceType === PieceType.King;
	}

	public changePieceTypeTo(pieceType: PieceType) {
		this.archetype = PieceArchetype.getArchetype(pieceType);
	}
} // class Piece
