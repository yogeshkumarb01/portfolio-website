import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yogesh Kumar B - Portfolio",
  description: "Full Stack Developer specialized in React.js, Next.js, Java Spring Boot, and Microservices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 