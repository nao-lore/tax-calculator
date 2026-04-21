import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "源泉徴収税計算ツール - フリーランス報酬の税額シミュレーション",
  description:
    "フリーランス・個人事業主向けの源泉徴収税額を自動計算。報酬額を入力するだけで、源泉徴収税額・手取り額を即座にシミュレーション。複数件の一括計算や年間合計表示にも対応。消費税の税込・税抜切替も可能です。",
  keywords: [
    "源泉徴収",
    "計算",
    "源泉徴収税",
    "シミュレーション",
    "フリーランス",
    "報酬",
    "手取り",
    "税額計算",
    "個人事業主",
    "確定申告",
  ],
  openGraph: {
    title: "源泉徴収税計算ツール - フリーランス報酬の税額シミュレーション",
    description:
      "フリーランス・個人事業主向けの源泉徴収税額を自動計算。報酬額を入力するだけで税額・手取り額を即座に計算。",
    type: "website",
    locale: "ja_JP",
    siteName: "源泉徴収税計算ツール",
  },
  twitter: {
    card: "summary_large_image",
    title: "源泉徴収税計算ツール - フリーランス報酬の税額シミュレーション",
    description:
      "フリーランス・個人事業主向けの源泉徴収税額を自動計算。報酬額を入力するだけで税額・手取り額を即座に計算。",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "源泉徴収税計算ツール",
              description:
                "フリーランス・個人事業主向けの源泉徴収税額を自動計算するツール",
              applicationCategory: "FinanceApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
              inLanguage: "ja",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
