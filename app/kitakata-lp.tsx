"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export default function KitakataLP() {
  const [currentReviews, setCurrentReviews] = useState<any[]>([])

  const handleMallClick = (mall: string) => {
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('trackCustom', 'MallClick', { product: 'kitakata' })
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'click_purchase', {
          event_category: 'ecommerce',
          event_label: mall,
          currency: 'JPY'
        })
      }
    }
  }

  const reviews = [
    {
      source: "楽天",
      comment: "初めて食べました。スープはもちろん麺がまた美味しい。鼻から抜ける煮干しの風味がまた良いです。",
      rating: 5,
      name: "お客様１",
    },
    {
      source: "Amazon",
      comment:
        "麺とスープがセットになっているので、手軽に本格的な喜多方ラーメンが楽しめます。麺の美味しさと煮干し薫るスープの組み合わせはクセになります。是非いろんな人に食べてほしくなります。",
      rating: 5,
      name: "お客様２",
    },
    {
      source: "Yahoo",
      comment:
        "今まで食べた喜多方ラーメンの中では1番太麺だと思います。スープも濃厚で、さすが喜多方ラーメンと思います。また購入したいです。",
      rating: 5,
      name: "お客様３",
    },
    {
      source: "楽天",
      comment: "量もいい感じ。コシがあってとても美味しいです。",
      rating: 5,
      name: "お客様４",
    },
    {
      source: "Yahoo",
      comment:
        "クオリティが高過ぎる。これがあれば外にラーメンを食べに行く必要がないのでは。濃厚なスープで麺の食感も非常に良いです。これほど濃厚で深みのあるスープは、スーパーで売っているラーメンには無いと思います。",
      rating: 5,
      name: "お客様５",
    },
    {
      source: "楽天",
      comment:
        "これぞ喜多方ラーメン！！会津ブランド館のラーメンは二郎系BUTAをリピートしていましたが、今回は喜多方ラーメン3食セットを購入しました。モチモチのちぢれ麺に絡まるさっぱりしていてコクのあるスープ、厚めのチャーシューとメンマ、ネギをトッピングして美味しくいただきました。作るのも簡単だし、本格的な喜多方ラーメンを食べられるのは本当に良かったです。",
      rating: 5,
      name: "お客様６",
    },
    {
      source: "楽天",
      comment:
        "喜多方ラーメンが好きでよく食べますが、このラーメンはとてもおいしいです。もう少し値段が安くなると良いです。",
      rating: 4,
      name: "お客様７",
    },
    {
      source: "楽天",
      comment: "とても美味しかったです！また食べたいと思います。",
      rating: 5,
      name: "お客様８",
    },
    {
      source: "Amazon",
      comment: "以前お店で食べて、美味しかったので、息子家族に食べさせたくて贈りました。",
      rating: 5,
      name: "お客様９",
    },
    {
      source: "楽天",
      comment:
        "喜多方ラーメンと言う名前は知っていましたが、食べたことはなかったので購入してみました。くどくなく美味しくいただきました。",
      rating: 5,
      name: "お客様１０",
    },
  ]

  useEffect(() => {
    // ランダムに10件のレビューを選択
    const shuffled = [...reviews].sort(() => 0.5 - Math.random())
    setCurrentReviews(shuffled.slice(0, 10))
  }, [])

  const products = [
    {
      id: "3set",
      title: "パーフェクトラーメン喜多方【S】3食セット",
      subtitle: "麺とスープ",
      description: "先ずはお試しにどうぞ",
      price: "1,250円（税・送料込）",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP%EF%BC%88%E6%96%B0%E5%9E%8B%EF%BC%89-01.jpg-KDVZBOhIPWjyjEFqIQeusu4W7mqife.jpeg",
    },
    {
      id: "9set",
      title: "パーフェクトラーメン喜多方【S】9食セット",
      subtitle: "麺とスープ",
      description: "得な9食リピーターに人気！",
      price: "3,400円（税・送料込）",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP%EF%BC%88%E6%96%B0%E5%9E%8B%EF%BC%899%E9%A3%9F-01.jpg-lk4lAzsKbaTeMwgXbKFL5XlnJ7xiaJ.jpeg",
    },
    {
      id: "chashu",
      title: "チャーシュー2枚付きパーフェクトラーメン喜多方",
      subtitle: "1食",
      description: "チャーシュー付きで満足度大",
      price: "730円（税込）送料別途",
      note: "2個まで全国一律300円",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP%E7%94%BB%E5%83%8F%EF%BC%88%E5%96%9C%E5%A4%9A%E6%96%B9%EF%BC%89-01.jpg-HQR2R1EBF7JFbmqzPppogqEzLib3vd.jpeg",
    },
  ]

  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative">
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E5%8D%98%E4%BD%93%E5%85%83%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB.jpg-3XqfHRx6DJULSCGnMqMTiDh0Xe5O6Q.jpeg"
            alt="パーフェクトラーメン喜多方"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              老舗の醤油、煮干しが香る、
              <br />
              染みる旨み。
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              まるで店で食べるような、
              <br />
              骨太スープの再現度。
            </p>
          </div>
        </div>
      </section>

      {/* 商品コンセプト紹介セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">ご自宅の食卓に、ほんの少しの贅沢を。</h2>
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                パーフェクトラーメンは、インスタント感を感じさせない"ちゃんとした一杯"を目指し、科学的に濃縮されたエキスに頼らず、ラーメン店と同様の素材・製法で仕上げています。
              </p>
              <p>
                煮干しの香りが立つだしと、喜多方の老舗創業100年「星醸造」の醤油が織りなす、落ち着いたコクと香ばしさ。
              </p>
              <p className="text-xl font-semibold text-amber-800">背伸びしない贅沢を、どうぞゆっくりと。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 商品紹介セクション - スープ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%83%BC%E3%83%97-01-ImsLuojMWzjyCA12Eg1IBR1eDWYU6W.png"
                  alt="完全再現スープ - パッケージから濃厚なスープへの変化"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  完全再現スープ
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">スープが違えば、ラーメンは別物になります。</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    「完全再現スープ」は、一般的なラーメンの約2〜3倍にあたる80cc。
                    よくある30cc前後のスープとは、香りもコクもまるで違います。
                  </p>
                  <p>
                    鶏ガラ・豚骨・煮干し・丸鶏を丁寧に煮出し、化学的な抽出エキスには頼らず、
                    ラーメン店と同じ素材・製法で仕上げた"本物"の味。
                  </p>
                  <p className="font-semibold text-amber-800">一口目から、スープが主役だと感じていただけるはずです。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 煮干しセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900">煮干しは、ただ旨味を出すだけの材料ではありません。</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>そして、私たちが使うのは、国産の煮干し。</p>
                  <p>一匹ずつ、頭とハラ（内臓）を丁寧に取り除いてから、時間をかけて、静かに炊き出しています。</p>
                  <p>雑味やえぐみを残さないために──けれど、香りも、旨味も、しっかりとそこにある。</p>
                  <p className="font-semibold text-blue-800">煮干しの旨さをご堪能ください。</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full md:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%85%AE%E5%B9%B2%E3%81%97-01.jpg-kInjYG6SVSDDqQ8RtFSAJQMoRxpzuD.jpeg"
                  alt="頭とハラを丁寧に取り除いた国産煮干し"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 喜多方の麺セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%BA%BA-01.jpg-f1sGPPQBDNkq6X0LPY6nXAnIrwR21K.jpeg"
                  alt="喜多方の多加水中太ちぢれ麺 - 五十嵐製麺の特注麺"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">喜多方の麺は、なぜ人を惹きつけるのか。</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    喜多方は、札幌・博多と並び「日本三大ラーメン」と称される地。
                    その評価を支えてきたのが、地元で長く愛される"多加水中太ちぢれ麺"です。
                  </p>
                  <p>
                    私たちが採用するのは、喜多方の老舗「五十嵐製麺」が手がけた特注麺。
                    加水率約38％のこの麺は、もちもちとした弾力と、つるりとした喉ごしが特徴です。
                  </p>
                  <p className="font-semibold text-green-800">
                    縮れがスープをしっかりとまとい、一口ごとに旨みがひろがる──
                    喜多方ラーメンが長年愛されてきた理由が、この一本の麺に詰まっています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品カード3種類横並び */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">商品ラインナップ</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-square w-full bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={
                      product.id === "3set"
                        ? "パーフェクトラーメン喜多方3食セット - 完成したラーメンと商品パッケージ"
                        : product.id === "9set"
                          ? "パーフェクトラーメン喜多方9食セット - 本格的な喜多方ラーメン完成品"
                          : "チャーシュー2枚付きパーフェクトラーメン喜多方 - 厚切りチャーシュー入り完成品"
                    }
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{product.subtitle}</CardDescription>
                  <CardDescription className="text-sm font-medium text-blue-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600 mb-2">{product.price}</p>
                  {product.note && <p className="text-sm text-gray-500">{product.note}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 関連商品セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">関連商品</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9TOP%E7%94%BB%E5%83%8F%EF%BC%88%E3%82%B9%E3%83%BC%E3%83%97%E3%81%AE%E3%81%BF%EF%BC%89-01.jpg-qbUGH7U55pcyWG6UYsXMIVmtzN9LXk.jpeg"
                  alt="煮干し醤油スープのみ8食セット - 大容量でお店の味を再現"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">スープのみ</CardTitle>
                <CardDescription>大容量80ccの煮干し醤油スープ 8食セット</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9TOP6%E9%A3%9F-01.jpg-gBJNNMIuylu0GcPC8srU0auo7LUzBr.jpeg"
                  alt="五十嵐製麺の喜多方ラーメン麺のみ6食セット - 真空パックされた生麺"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">麺のみ</CardTitle>
                <CardDescription>五十嵐製麺の特注多加水中太ちぢれ麺 6食セット</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 喜多方の特徴セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">喜多方の特徴</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sato_shouhiko__--ar_43_--v_7_04940719-f4ea-4333-b2eb-b2bab129da16_1-KmOgUoyRqQbDTmD4JO4KFFnjJOtLA5.png"
                  alt="喜多方の伝統的なラーメン店街 - 朝ラー文化が息づく街並み"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    喜多方は、福島の山あいにある小さな町。早朝から湯気を立てる"朝ラー"文化とともに、ラーメンはこの町の日常に溶け込んできました。
                  </p>
                  <p>
                    透明感のある醤油スープに、地元の製麺所が仕立てた中太の多加水ちぢれ麺。
                    昔ながらの、けれど手を抜かない一杯が、静かに受け継がれています。
                  </p>
                  <p className="font-semibold text-amber-800">
                    喜多方ラーメンは、主張しすぎません。 でも、食べた人の記憶には、きっと長く残ります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="reviews" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お客様の声</h2>
          <p className="text-center text-gray-600 mb-8">（実際にサイトレビューを抜粋させて頂いております）</p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {currentReviews.map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-eBzyaRFsXeIikRBId98OeFUVhSzf0d.jpeg"
                        alt={`お客様 ${i + 1} のアバター`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span>お客様{i + 1}</span>
                    <span className="text-sm text-gray-500">({review.source})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="italic">&quot;{review.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 送料無料・即日発送セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/1] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-7w5x12TQMEU3igAn9Jw8vNhpX1R7VT.jpeg"
                  alt="送料無料"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[3/1] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-gvsHqMx1KYEAFJpKHnRUGkVqb2MckI.jpeg"
                  alt="即日発送"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ご購入セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ご購入はこちらから</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Yahoo!ショッピング */}
            <div className="bg-[#ffdddd] p-6 rounded-lg">
              <Link
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/cfac242eebb.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => handleMallClick('yahoo')}
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-MEP8aX6vdnhkm0MalTPsgcj8jbQqA0.png"
                    alt="Yahoo!ショッピング"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">Yahoo!ショッピング</h4>
              <p className="text-sm text-center mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-[#deeeff] p-6 rounded-lg">
              <Link
                href="https://item.rakuten.co.jp/aizubrandhall/c/0000000033/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => handleMallClick('rakuten')}
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-991Pc669KycdDKQBzO5S93EuS2I3kg.png"
                    alt="楽天市場"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">楽天市場</h4>
              <p className="text-sm text-center mb-4">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
            </div>

            {/* Amazon */}
            <div className="bg-[#e8ffdd] p-6 rounded-lg">
              <Link
                href="https://www.amazon.co.jp/stores/page/D61FAF32-CC56-40AE-A974-E47FB38E0F1E"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => handleMallClick('amazon')}
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-mAXYlXivqE7kA5DfbJhHMDX5hkPVNJ.png"
                    alt="Amazon"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">Amazon</h4>
              <p className="text-sm text-center mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
