import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig(
	{
		files: ["bin/siwedt"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: {
			ecmaVersion: 12,
			sourceType: "commonjs",
			globals: globals.node,
		},
		rules: {
			"indent": ["error", 4],
			"linebreak-style": ["error", "unix"],
			"quotes": ["error", "single"],
			"semi": ["error", "always"],
		}
	},
);
