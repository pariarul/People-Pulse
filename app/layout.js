import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "People Pulse | Premium Business Research Panel",
  description: "Join the exclusive panel for business professionals. Earn rewards for your expertise.",
  icons: {
    icon: "/people_pulse_logo.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50 relative`}>
        {children}
      </body>
    </html>
  );
}
