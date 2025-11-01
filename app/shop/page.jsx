import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";

export const metadata = {
  title: "Shop - Vastra",
  description: "Browse our collection of premium t-shirts for custom printing",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Shop Our Collection
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Discover premium quality t-shirts perfect for your custom designs
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
