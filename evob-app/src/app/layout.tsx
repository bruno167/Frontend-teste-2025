import type { Metadata } from "next";
import { ThemeProvider } from "./Styles/ThemeProvider";
import StyledComponentsRegistry from "./registry";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

export const metadata: Metadata = {
  title: "Evob",
  description: "Evob plataforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
