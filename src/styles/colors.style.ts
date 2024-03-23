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
        regular: "#323232",
    },
    white: {
        regular: "#ffffff",
    },
    black: {
        regular: "#1e1e1e",
    },
}

export const colors = {
    text: {
        regular: palette.gray.regular,
        emphasis: palette.blue.dark,
        inverse: palette.white.regular,
    },
    background: {
        primary: palette.blue.regular,
        success: palette.green.regular,
        primaryHover: palette.blue.dark,
        successHover: palette.green.dark,
    },
};