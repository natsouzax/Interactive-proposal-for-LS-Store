"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, useRevealState } from "@/components/ui/Reveal";
import { cn, formatCurrency } from "@/lib/utils";
import { products, categories, brands, type Product } from "@/constants/products";

const colorMap: Record<string, string> = {
  "#FFFFFF": "bg-white border border-gray-200",
  "#111111": "bg-gray-900",
  "#333333": "bg-gray-700",
  "#444444": "bg-gray-600",
  "#555555": "bg-gray-500",
  "#999999": "bg-gray-400",
  "#4A90D9": "bg-blue-500",
  "#E74C3C": "bg-red-500",
  "#2D5016": "bg-green-800",
  "#4A3728": "bg-amber-900",
  "#D4A574": "bg-amber-400",
  "#C4A882": "bg-amber-300",
  "#8B7355": "bg-amber-700",
};

function ProductCard({ product, index, isInView }: { product: Product; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(30px)" }}
      animate={
        isInView
          ? { opacity: 1, transform: "translateY(0px)" }
          : { opacity: 0, transform: "translateY(30px)" }
      }
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ transform: "translateY(-4px)" }}
      className="group cursor-pointer"
    >
      <div className="relative mb-3 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl bg-gray-50">
        <span className="text-5xl sm:text-6xl">{product.image}</span>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gray-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gray-900/0 transition-colors duration-300 group-hover:bg-gray-900/5" />
      </div>
      <div>
        <p className="mb-1 text-[11px] uppercase tracking-wider text-gray-400">
          {product.brand}
        </p>
        <h3 className="text-sm font-medium text-gray-900 transition-colors group-hover:text-gray-600">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            {formatCurrency(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>
        <div className="mt-2 flex gap-1">
          {product.colors.slice(0, 4).map((color, i) => (
            <div key={i} className={cn("h-3 w-3 rounded-full", colorMap[color] || "bg-gray-300")} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Catalogo() {
  const { ref, isInView } = useRevealState();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== "Todos" && p.category !== activeCategory) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedBrand && p.brand !== selectedBrand) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });
  }, [activeCategory, search, selectedBrand, priceRange]);

  return (
    <section ref={ref} id="catalogo" className="overflow-hidden py-16 sm:py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Catálogo Inteligente"
          title={
            <>
              Explore, filtre,
              <br />
              <span className="text-gray-400">encontre.</span>
            </>
          }
        />

        <Reveal delay={0.2} className="mb-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="min-h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm transition-colors focus:border-gray-400 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm transition-colors hover:bg-gray-50"
            >
              <SlidersHorizontal size={14} />
              Filtros
            </button>
          </div>

          <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm transition-all duration-200",
                  activeCategory === cat
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-6 pb-2 pt-4">
                  <div>
                    <p className="mb-2 text-xs font-medium text-gray-500">Marca</p>
                    <div className="flex flex-wrap gap-1.5">
                      {brands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                          className={cn(
                            "min-h-9 rounded-full border px-3 text-xs transition-all",
                            selectedBrand === brand
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-200 bg-white text-gray-600"
                          )}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs font-medium text-gray-500">
                      Preço: até {formatCurrency(priceRange[1])}
                    </p>
                    <input
                      type="range"
                      min={0}
                      max={600}
                      step={50}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                      className="w-full max-w-xs accent-gray-900"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} isInView={isInView} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm text-gray-400">
            Nenhum produto encontrado com esses filtros.
          </div>
        )}
      </Container>
    </section>
  );
}
