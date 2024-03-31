const palette = {
    blue: {
        light: "#eaf5fe",
        regular: "#0176d3",
        dark: "#032d60",
    },
    green: {
        regular: "#2e844a",
        dark: "#1a4a2a",
    },
    gray: {
        lighter: "#dddddd",
        light: "#5D5D5D",
        regular: "#323232",
    },
    white: {
        regular: "#ffffff",
    },
    black: {
        regular: "#1e1e1e",
    },
    purple: {
        regular: "#9260C4",
    }
}

export const colors = {
    text: {
        regular: palette.gray.regular,
        emphasis: palette.blue.dark,
        inverse: palette.white.regular,
        light: palette.gray.light,
        lighter: palette.gray.lighter,
        secondary: palette.purple.regular,
    },
    background: {
        default: palette.white.regular,
        inverse: palette.black.regular,
        primary: palette.blue.regular,
        primaryDark: palette.blue.dark,
        success: palette.green.regular,
        primaryHover: palette.blue.dark,
        successHover: palette.green.dark,
        forms: palette.blue.light
    },
    border: {
        primaryDark : palette.blue.dark
    }
};