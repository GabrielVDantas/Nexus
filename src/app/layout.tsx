import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
})

export const metadata: Metadata = {
  title: "Nexus",
  description: "Receba financiamento no Nexus!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
