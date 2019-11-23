module.exports = {
	roots: ["./src"],
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "identity-obj-proxy"
	},
	transform: {
		"^.+\\.jsx?$": require.resolve("babel-jest"),
		"^.+\\.(ts|tsx)?$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["cjs.js", "ts", "tsx", "js", "jsx", "json", "node"]
};
