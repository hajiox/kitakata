"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export default function KitakataLP() {
  const [currentReviews, setCurrentReviews] = useState<any[]>([])

  const reviews = [
    {
      source: "楽天",
      comment:
        "透明感のあるスープなのに、しっかりとした旨味があって驚きました。煮干しの香りが上品で、家庭でこんな本格的な味が楽しめるなんて。",
      rating: 5,
      name: "ラーメン好きさん",
    },
    {
      source: "Yahoo",
      comment:
        "多加水麺のもちもち感が最高です。スープとの絡みも良くて、喜多方ラーメンの特徴がよく再現されていると思います。",
      rating: 5,
      name: "麺マニアさん",
    },
    {
      source: "Amazon",
      comment:
        "老舗の醤油を使っているだけあって、深いコクと香ばしさがあります。インスタント感が全くなくて感動しました。",
      rating: 4,
      name: "グルメさん",
    },
    {
      source: "楽天",
      comment:
        "80ccのスープは確かに多いですね。一般的なラーメンとは全然違う満足感があります。煮干しの処理も丁寧で雑味がありません。",
      rating: 5,
      name: "料理好きさん",
    },
    {
      source: "Yahoo",
      comment: "朝ラー文化の喜多方らしい、優しくて飽きのこない味。毎日でも食べられそうな上品な仕上がりです。",
      rating: 5,
      name: "喜多方ファンさん",
    },
    {
      source: "Amazon",
      comment: "五十嵐製麺の麺は本当に美味しいです。加水率38％の麺は家庭では作れない食感で、プロの技術を感じます。",
      rating: 4,
      name: "製麺通さん",
    },
    {
      source: "楽天",
      comment: "星醸造の醤油の香りが素晴らしい。100年の歴史を感じる深い味わいで、ラーメンが一気に格上げされます。",
      rating: 5,
      name: "醤油愛好家さん",
    },
    {
      source: "Yahoo",
      comment: "透明なスープなのに旨味がしっかり。煮干しの処理が丁寧で、えぐみが全くないのが素晴らしいです。",
      rating: 4,
      name: "煮干し好きさん",
    },
    {
      source: "Amazon",
      comment: "背伸びしない贅沢という表現がぴったり。日常に溶け込む上品な美味しさで、リピート確定です。",
      rating: 5,
      name: "日常グルメさん",
    },
    {
      source: "楽天",
      comment: "化学的なエキスを使わない製法にこだわりを感じます。本物志向の方におすすめしたい一品です。",
      rating: 4,
      name: "本物志向さん",
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
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "9set",
      title: "パーフェクトラーメン喜多方【S】9食セット",
      subtitle: "麺とスープ",
      description: "得な9食リピーターに人気！",
      price: "3,400円（税・送料込）",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "chashu",
      title: "チャーシュー2枚付きパーフェクトラーメン喜多方",
      subtitle: "1食",
      description: "チャーシュー付きで満足度大",
      price: "700円（税込）送料別途",
      note: "2個まで全国一律300円",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative">
        <div className="relative h-screen">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="パーフェクトラーメン喜多方"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                老舗の醤油、煮干しが香る、
                <br />
                染みる旨み。
              </h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
                まるで店で食べるような、
                <br />
                骨太スープの再現度。
              </p>
            </div>
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="完全再現スープ"
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="丁寧に処理された煮干し"
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="喜多方の多加水中太ちぢれ麺"
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
                    alt={product.title}
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
                  src="/placeholder.svg?height=300&width=400"
                  alt="スープのみ"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">スープのみ</CardTitle>
                <CardDescription>お好みの麺と合わせてお楽しみください</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image src="/placeholder.svg?height=300&width=400" alt="麺のみ" fill className="object-contain p-4" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">麺のみ</CardTitle>
                <CardDescription>五十嵐製麺の特注多加水中太ちぢれ麺</CardDescription>
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="喜多方の朝ラー文化"
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
                        src="/placeholder.svg?height=48&width=48"
                        alt={`お客様 ${i + 1} のアバター`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span>{review.name}</span>
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
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="送料無料・即日発送"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-red-800">送料無料　即日発送</h2>
                <p className="text-lg text-gray-700">
                  ご注文いただいた商品は、即日発送いたします。
                  <br />
                  全国どこでも送料無料でお届けします。
                </p>
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
              <Link href="#" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
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
              <Link href="#" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
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
              <Link href="#" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
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
