const defaultConfig = {
    root: true,
    extends: "eslint:recommended",
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true
    },
    globals: {},
    rules: {
        "eol-last": ["error", "always"],
        "func-style": "off",
        "global-require": "off",
        "keyword-spacing": ["error", { before: true, after: true }],
        "linebreak-style": ["error", "unix"],
        "no-bitwise": "off",
        "no-plusplus": "off",
        "no-unneeded-ternary": "off",
        "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "prefer-const": "off",
        "prefer-spread": "off",
        "space-in-parens": ["error", "never"],
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],
        radix: ["error", "always"],
        semi: ["error", "always"],
        strict: ["error", "global"]
    }
};

const { getConfig } = require("../util");
module.exports = getConfig("JS", defaultConfig);
