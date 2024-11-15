/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ['@demo/eslint-config/react.js'],
	parserOptions: {
		project: ['./tsconfig.*?.json']
	}
};
