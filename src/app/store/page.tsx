
import { ProductGrid } from '@/components/store/ProductGrid';
import { ProductFilters } from '@/components/store/ProductFilters';

// Simulate fetching product data (replace with actual API call or data source)
async function getProducts() {
  // In a real app, fetch this from your database or API
  return [
    { id: '1', name: 'Vanilla Bean Dream', price: 799, scent: 'Sweet', color: 'Cream', imageUrl: 'https://picsum.photos/seed/vanilla/600/400', description: 'Warm vanilla notes.', burnTime: 40 },
    { id: '2', name: 'Lavender Fields', price: 849, scent: 'Floral', color: 'Purple', imageUrl: 'https://picsum.photos/seed/lavender/600/400', description: 'Calming lavender essence.', burnTime: 40 },
    { id: '3', name: 'Sandalwood Serenity', price: 899, scent: 'Woody', color: 'Brown', imageUrl: 'https://picsum.photos/seed/sandalwood/600/400', description: 'Earthy sandalwood aroma.', burnTime: 40 },
    { id: '4', name: 'Citrus Burst', price: 799, scent: 'Citrus', color: 'Yellow', imageUrl: 'https://picsum.photos/seed/citrus/600/400', description: 'Uplifting lemon and orange.', burnTime: 35 },
    { id: '5', name: 'Ocean Breeze', price: 829, scent: 'Fresh', color: 'Blue', imageUrl: 'https://picsum.photos/seed/ocean/600/400', description: 'Crisp and clean aquatic scent.', burnTime: 40 },
    { id: '6', name: 'Rose Garden', price: 849, scent: 'Floral', color: 'Pink', imageUrl: 'https://picsum.photos/seed/rose/600/400', description: 'Classic romantic rose petals.', burnTime: 40 },
    { id: '7', name: 'Spiced Apple', price: 879, scent: 'Spicy', color: 'Red', imageUrl: 'https://picsum.photos/seed/apple/600/400', description: 'Warm apple cider with cinnamon.', burnTime: 38 },
    { id: '8', name: 'Eucalyptus Mint', price: 829, scent: 'Fresh', color: 'Green', imageUrl: 'https://picsum.photos/seed/eucalyptus/600/400', description: 'Invigorating mint and eucalyptus.', burnTime: 40 },
 ];
}

export default async function StorePage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const allProducts = await getProducts();

  // Extract unique filter options from products
  const scents = [...new Set(allProducts.map(p => p.scent))];
  const colors = [...new Set(allProducts.map(p => p.color))];
  const minPrice = Math.min(...allProducts.map(p => p.price));
  const maxPrice = Math.max(...allProducts.map(p => p.price));

  return (
    <div className="space-y-8">
       <section className="text-center py-8 fade-in">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 text-primary">Our Collection</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our range of handcrafted scented candles.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <aside className="w-full lg:w-1/4 xl:w-1/5 fade-in fade-in-delay-1">
           <ProductFilters
            scents={scents}
            colors={colors}
            minPrice={minPrice}
            maxPrice={maxPrice}
            currentParams={searchParams ?? {}}
            />
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4 xl:w-4/5 fade-in fade-in-delay-2">
          <ProductGrid allProducts={allProducts} searchParams={searchParams} />
        </main>
      </div>
    </div>
  );
}
