// github:tom-weatherhead/pdchess3/src/piece-type.ts

export enum PieceType {
	King = 0,
	Queen,
	Rook,
	Bishop,
	Knight,
	Pawn,
	Null,
	NumPieceTypes = Null
}

export function pieceTypeToInitial(pieceType: PieceType): string {
	switch (pieceType) {
		case PieceType.King:
			return 'K';

		case PieceType.Queen:
			return 'Q';

		case PieceType.Rook:
			return 'R';

		case PieceType.Bishop:
			return 'B';

		case PieceType.Knight:
			return 'N';

		case PieceType.Pawn:
		case PieceType.Null:
			return '';

		default:
			throw new Error(
				`pieceTypeToInitial() : Bad pieceType '${PieceType[pieceType]}' (${pieceType})`
			);
	}
}

export function initialToPieceType(initial: string): PieceType {
	switch (initial.toLowerCase()) {
		case 'k':
			return PieceType.King;

		case 'q':
			return PieceType.Queen;

		case 'r':
			return PieceType.Rook;

		case 'b':
			return PieceType.Bishop;

		case 'n':
			return PieceType.Knight;

		case 'p':
			return PieceType.Pawn;

		default:
			throw new Error(`initialToPieceType('${initial}') failed`);
	}
}
