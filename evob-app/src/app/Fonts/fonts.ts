import { Inter, Quattrocento, Roboto_Condensed } from "next/font/google";

export const inter = Inter ({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap"
});

export const robotoCondensed = Roboto_Condensed ({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap"
});

export const quattrocento = Quattrocento ({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap"
});