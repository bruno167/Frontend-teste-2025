import { inter, quattrocento, robotoCondensed } from "../Fonts/fonts";


const theme = {
    colors: {
        base: {
            "lightBg": "#f1f4fb",
            "purple": "#792bf9", 
            "yellow": "#e3d914",
            "green": "#2B932F",
            "red": "#e33f52", 
            "black": "#000",
            "white": "#fff",
            "gray": "#666666", 
            "darkGray": "#383838",
        },
        semantic: {
            primary: "#792bf9",
            secondary: "#e3d914",
            highlight: "#e33f52",
            background: "#f1f4fb",
        },
            text: {
                default: "#000",
                light: "#fff",
                muted: "#666666",
                charcoalGray: "#262525",
                slateGray: "#090909",
            },
            button: {
                primary: "#792bf9", 
                secondary: "#000",
                hover: "#e3d914", 
            },
            status: {
                label: "#383838",
                highlight: "#e33f52",
        },
    },
    fonts: {
        inter: inter.style.fontFamily,
        robotoCondensed: robotoCondensed.style.fontFamily,
        quattrocento: quattrocento.style.fontFamily,
    },
    fontWeights: {
        body: 400,
        heading: 500,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    logoSizes: {
        mobile: {width: 50, height: 20},
        desktop: {width: 76, height: 30}
    },
    iconSizes: {
        mobile: {width: 20, height: 20},
        desktop: {width: 16, height: 16}
    },
};

export default theme;