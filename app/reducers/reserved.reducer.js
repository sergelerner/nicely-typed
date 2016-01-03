import _ from 'lodash';

const es1 = ['do', 'if', 'in', 'for', 'new', 'try', 'var', 'case', 'else', 'enum', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'delete', 'export', 'import', 'return', 'switch', 'typeof', 'default', 'extends', 'finally', 'continue', 'debugger', 'function', ];
const es2 = ['do', 'if', 'in', 'for', 'int', 'new', 'try', 'var', 'byte', 'case', 'char', 'else', 'enum', 'goto', 'long', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'final', 'float', 'short', 'super', 'throw', 'while', 'delete', 'double', 'export', 'import', 'native', 'public', 'return', 'static', 'switch', 'throws', 'typeof', 'boolean', 'default', 'extends', 'finally', 'package', 'private', 'abstract', 'continue', 'debugger', 'function', 'volatile', 'interface', 'protected', 'transient', 'implements', 'instanceof', 'synchronized' ];
const es5 = ['do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class',  'const', 'false', 'super', 'throw', 'while', 'yield', 'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default', 'extends', 'finally', 'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface', 'protected', 'implements', 'instanceof'];
const es6 = ['do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'null', 'this', 'true', 'void', 'with', 'await', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'yield', 'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default', 'extends', 'finally', 'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface', 'protected', 'implements', 'instanceof']; 

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