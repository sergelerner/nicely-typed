import _ from 'lodash';

const reserverWordsAbc = [
	['abstract'],
	['boolean', 'break', 'byte'],
	['case', 'catch', 'char', 'class', 'const', 'continue'],
	['debugger', 'default', 'delete', 'do', 'double'],
	['else', 'enum', 'export', 'extends'],
	['false', 'final', 'finally', 'float', 'for', 'function'],
	['goto'],
	['if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface'],
	['long'],
	['native', 'new', 'null'],
	['package', 'private', 'protected', 'public'],
	['return'],
	['short', 'static', 'super', 'switch', 'synchronized'],
	['this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof'],
	['var', 'volatile', 'void'],
	['while', 'with']
];

const reserverWordsInUse = ['break', 'case', 'catch', 'continue', 'default', 'delete', 'do', 'else', 'false', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new', 'null', 'return', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'];

const reservedWordsUiState = reserverWordsAbc.map((group) => {
	return group.map((word) => {
		return {
			id: _.uniqueId('word_'),
			theWord: word,
			isInuse: _.includes(reserverWordsInUse, word)
		}
	})  
});

const reservedWordsReducer= (state = reservedWordsUiState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default reservedWordsReducer;