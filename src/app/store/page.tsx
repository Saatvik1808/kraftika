
import { ProductGrid } from '@/components/store/ProductGrid';
import { ProductFilters } from '@/components/store/ProductFilters';
import type { Product } from '@/types/product'; // Import type

// Simulate fetching product data (replace with actual API call or data source)
async function getProducts(): Promise<Product[]> { // Added type safety
  // In a real app, fetch this from your database or API
   // Updated candle names to fit Kraftika's warm/artisanal theme
  return [
    { id: '1', name: 'Amber Glow', price: 899, scent: 'Warm Amber', color: 'Amber', imageUrl: 'https://picsum.photos/seed/amber/600/400', description: 'Rich amber with hints of vanilla and spice.', burnTime: 40 },
    { id: '2', name: 'Spiced Orange Zest', price: 849, scent: 'Citrus & Spice', color: 'Orange', imageUrl: 'https://picsum.photos/seed/orange/600/400', description: 'Bright orange zest mingled with warm cloves.', burnTime: 40 },
    { id: '3', name: 'Cozy Hearth', price: 949, scent: 'Woody & Smoky', color: 'Brown', imageUrl: 'https://picsum.photos/seed/cozy/600/400', description: 'Notes of cedarwood, smoke, and leather.', burnTime: 40 },
    { id: '4', name: 'Creamy Sandalwood', price: 929, scent: 'Woody & Sweet', color: 'Cream', imageUrl: 'https://picsum.photos/seed/sandalwood-cream/600/400', description: 'Smooth sandalwood balanced with creamy vanilla.', burnTime: 35 },
    { id: '5', name: 'Golden Hour', price: 879, scent: 'Floral & Musk', color: 'Gold', imageUrl: 'https://picsum.photos/seed/golden/600/400', description: 'A warm floral blend with a musky base.', burnTime: 40 },
    { id: '6', name: 'Terracotta Rose', price: 899, scent: 'Earthy Floral', color: 'Terracotta', imageUrl: 'https://picsum.photos/seed/terracotta/600/400', description: 'Delicate rose intertwined with earthy clay notes.', burnTime: 40 },
    { id: '7', name: 'Autumn Orchard', price: 879, scent: 'Fruity & Spicy', color: 'Red', imageUrl: 'https://picsum.photos/seed/orchard/600/400', description: 'Baked apples, cinnamon, and a touch of maple.', burnTime: 38 },
    { id: '8', name: 'Burnt Sugar Fig', price: 919, scent: 'Sweet & Earthy', color: 'Deep Purple', imageUrl: 'https://picsum.photos/seed/fig/600/400', description: 'Caramelized sugar blended with ripe fig.', burnTime: 40 },
 ];
}

export default async function StorePage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const allProducts = await getProducts();

  // Extract unique filter options from products
  const scents = [...new Set(allProducts.map(p => p.scent))].sort(); // Sort alphabetically
  const colors = [...new Set(allProducts.map(p => p.color))].sort(); // Sort alphabetically
  const minPrice = Math.min(...allProducts.map(p => p.price));
  const maxPrice = Math.max(...allProducts.map(p => p.price));

  return (
    <div className="space-y-12"> {/* Increased spacing */}
       <section className="text-center py-10 fade-in"> {/* Adjusted padding */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Our Kraftika Collection</h1> {/* Updated Title */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our range of handcrafted scented candles, designed to warm your space and soothe your soul.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12"> {/* Increased gap */}
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
```