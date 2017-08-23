module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": [
            "error",
            150
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "jsx-a11y/href-no-hash": "off",
        "react/no-array-index-key": "off"
    }
};