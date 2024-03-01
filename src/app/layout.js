import { Inter } from "next/font/google";
// import "./globals.css";
import "./app.css";
import "./cb.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CD Needs Statement Generator",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
