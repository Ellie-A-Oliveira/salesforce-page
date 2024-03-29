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
        light: "#818181",
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
        secondary: palette.purple.regular,
    },
    background: {
        primary: palette.blue.regular,
        primaryDark: palette.blue.dark,
        success: palette.green.regular,
        primaryHover: palette.blue.dark,
        successHover: palette.green.dark,
    },
};