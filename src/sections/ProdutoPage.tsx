"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, ShoppingBag, Star, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn, formatCurrency } from "@/lib/utils";
import {
  productImages,
  productColors,
  productSizes,
  relatedProducts,
  featuredProduct,
} from "@/constants/produto-page";

export default function ProdutoPage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section className="overflow-hidden py-16 sm:py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Página de Produto"
          title={
            <>
              Experiência de compra
              <br />
              <span className="text-gray-400">que converte.</span>
            </>
          }
        />

        <Reveal delay={0.2} className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gray-50 sm:rounded-3xl">
              <motion.span
                key={selectedImage}
                initial={{ opacity: 0, transform: "scale(0.95)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                className="text-[clamp(4rem,18vw,7.5rem)]"
              >
                {productImages[selectedImage]}
              </motion.span>
              <button
                className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                aria-label="Adicionar produto aos favoritos"
              >
                <Heart size={18} className="text-gray-400" />
              </button>
            </div>
            <div className="flex gap-2">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  aria-label={`Selecionar imagem ${i + 1} do produto`}
                  className={cn(
                    "flex aspect-square flex-1 items-center justify-center rounded-xl bg-gray-50 transition-all",
                    selectedImage === i
                      ? "ring-2 ring-gray-900 ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <span className="text-2xl sm:text-3xl">{img}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-gray-400">
                {featuredProduct.brand}
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900 md:text-3xl">
                {featuredProduct.name}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i <= featuredProduct.rating
                          ? "fill-gray-900 text-gray-900"
                          : "fill-gray-200 text-gray-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">({featuredProduct.reviews} avaliações)</span>
              </div>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">
                {formatCurrency(featuredProduct.price)}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {formatCurrency(featuredProduct.originalPrice)}
              </span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-900">
                {featuredProduct.discountLabel}
              </span>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-gray-700">Cor</p>
              <div className="flex gap-2">
                {productColors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    aria-label={`Selecionar cor ${color.name}`}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                      selectedColor === i
                        ? "ring-2 ring-gray-900 ring-offset-2"
                        : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
                    )}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {selectedColor === i && (
                      <Check size={14} className={color.value === "#FFFFFF" ? "text-gray-900" : "text-white"} />
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-400">{productColors[selectedColor].name}</p>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-gray-700">Tamanho</p>
              <div className="flex flex-wrap gap-2">
                {productSizes.map((size, i) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(i)}
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-medium transition-all",
                      selectedSize === i
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98]"
            >
              {addedToCart ? (
                <>
                  <Check size={16} />
                  Adicionado ao Carrinho!
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  Adicionar ao Carrinho
                </>
              )}
            </button>

            <div className="border-t border-gray-100 pt-6">
              <p className="mb-4 text-sm font-medium text-gray-700">Combina com</p>
              <div className="grid grid-cols-3 gap-3">
                {relatedProducts.map((rp) => (
                  <div
                    key={rp.name}
                    className="cursor-pointer rounded-xl bg-gray-50 p-3 text-center transition-colors hover:bg-gray-100"
                  >
                    <span className="text-3xl">{rp.emoji}</span>
                    <p className="mt-2 text-[10px] font-medium leading-tight text-gray-700">
                      {rp.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-gray-400">{formatCurrency(rp.price)}</p>
                    <span className="mt-1 inline-block rounded-full bg-green-50 px-1.5 py-0.5 text-[9px] font-medium text-green-700">
                      {rp.match} match
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
