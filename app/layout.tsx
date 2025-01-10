import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalStyles } from "restyle";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hello Friends - Hecterbona's Labo",
  description:
    "Hecterbonha is a web artisan tinkering with everything from chilly server rooms to pay-as-you-go clouds. Turning requirement into production incident!",
};

const RestyledGlobal = () => {
  return (
    <>
      <GlobalStyles>
        {{
          ":root": {
            "--background": "#ffffff",
            "--foreground": "#000000",
          },
          "@media (prefers-color-scheme: dark)": {
            ":root": {
              "--background": "#000000",
              "--foreground": "#ffffff",
            },
          },
          "*": {
            margin: 0,
            padding: 0,
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
            fontFamily: inter.style.fontFamily,
          },
        }}
      </GlobalStyles>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <RestyledGlobal />
      <body>{children}</body>
    </html>
  );
}
