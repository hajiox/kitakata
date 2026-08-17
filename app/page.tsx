import type { Metadata } from "next"
import KitakataLP from "./kitakata-lp"

export const metadata: Metadata = {
  title: "パーフェクトラーメン喜多方｜本格煮干し醤油ラーメン通販【会津ブランド館】送料無料",
  description:
    "老舗醤油と煮干しが香る本格喜多方ラーメン。80ccの完全再現スープと五十嵐製麺の多加水ちぢれ麺で、まるで店で食べるような骨太スープの再現度。3食セット1,299円から送料無料でお届け。",
  keywords:
    "喜多方ラーメン,煮干しラーメン,醤油ラーメン,本格ラーメン,通販,お取り寄せ,送料無料,会津ブランド館,星醸造,五十嵐製麺,多加水麺,完全再現スープ,福島県,日本三大ラーメン,朝ラー",
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "パーフェクトラーメン喜多方｜老舗の醤油、煮干しが香る本格ラーメン",
    description:
      "まるで店で食べるような骨太スープの再現度。老舗星醸造の醤油と国産煮干しを使用した本格喜多方ラーメンを送料無料でお届け。3食セット1,299円から。",
    url: "https://kitakata.aizubrandhall-lp2.com",
    siteName: "会津ブランド館",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-2peBBxNdwAnlrOIL6XLIycSSIuHTek.jpeg",
        width: 1217,
        height: 647,
        alt: "パーフェクトラーメン喜多方 - 老舗醤油と煮干しの本格ラーメン。透明感のある醤油スープに多加水ちぢれ麺、チャーシュー、メンマ、ネギ、海苔、半熟卵をトッピング",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
    title: "パーフェクトラーメン喜多方｜本格煮干し醤油ラーメン通販",
    description: "老舗の醤油、煮干しが香る、染みる旨み。まるで店で食べるような骨太スープの再現度。送料無料でお届け。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-2peBBxNdwAnlrOIL6XLIycSSIuHTek.jpeg",
        alt: "パーフェクトラーメン喜多方 - 本格煮干し醤油ラーメン",
        width: 1217,
        height: 647,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://kitakata.aizubrandhall-lp2.com",
  },
  category: "food",
  classification: "ラーメン通販",
  other: {
    "product:price:amount": "1299",
    "product:price:currency": "JPY",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:retailer_item_id": "kitakata-ramen-3set",
    "product:brand": "会津ブランド館",
    "product:category": "食品・グルメ > ラーメン",
  },
}

export default function Page() {
  return <KitakataLP />
}
