export const SELECT = 'SELECT';

export function select(word) {
	return {
		type: SELECT,
		word
	}
}
