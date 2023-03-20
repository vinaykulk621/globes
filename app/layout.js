import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Globes|Giant-Balls",
  description: "Definately Not Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
