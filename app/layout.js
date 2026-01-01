import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "People Pulse | Earn Reward Points for Business Insights",
    template: "%s | People Pulse",
  },
  description:
    "People Pulse is a premium business research panel where professionals earn reward points for sharing insights through surveys and studies.",

  keywords: [
    "People Pulse",
    "business research panel",
    "paid surveys",
    "earn reward points",
    "professional surveys",
    "market research",
    "online surveys",
    "earn points online",
  ],

  authors: [{ name: "People Pulse" }],
  creator: "People Pulse",
  publisher: "People Pulse",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "People Pulse | Earn Reward Points for Your Expertise",
    description:
      "Join People Pulse, a trusted research panel for professionals. Share insights, complete surveys, and earn reward points.",
    url: "https://peoplepulse.com",
    siteName: "People Pulse",
    images: [
      {
        url: "/people_pulse_logo.png",
        width: 1200,
        height: 630,
        alt: "People Pulse – Business Research Panel",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "People Pulse | Earn Reward Points",
    description:
      "Get rewarded with points for participating in professional surveys and research studies.",
    images: ["/people_pulse_logo.png"],
  },

  icons: {
    icon: "/people_pulse_logo.png",
    apple: "/people_pulse_logo.png",
  },

  metadataBase: new URL("https://peoplepulse.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50 relative`}
      >
        {children}
      </body>
    </html>
  );
}
