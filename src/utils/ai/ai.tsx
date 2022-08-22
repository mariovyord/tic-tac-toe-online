// give sign and tic tac toe array to ai and it will play a move

type TSigns = 'x' | 'o' | '';
export type TGameArray = TSigns[];

const ai = (sign: TSigns, gameArray: TGameArray): TGameArray => {
	const arr = [...gameArray];

	const getRandom = (x: any[]): number => x[Math.floor((Math.random() * x.length))];

	const randomFreeIndex = getRandom(arr
		.map((sq, i) => {
			if (sq === '') {
				return i
			} else {
				return sq
			}
		})
		.filter(x => typeof x === "number")
	);

	return arr.map((sq, i) => {
		if (i === randomFreeIndex) {
			return sign;
		} else {
			return sq;
		}
	});
}

export default ai;

