import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium t-shirts perfect for custom printing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop" className="btn-primary inline-flex">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
