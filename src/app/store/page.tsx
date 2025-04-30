
import { ProductGrid } from '@/components/store/ProductGrid';
import { ProductFilters } from '@/components/store/ProductFilters';
import type { Product } from '@/types/product'; // Import type

// Simulate fetching product data (replace with actual API call or data source)
async function getProducts(): Promise<Product[]> { // Added type safety
  // In a real app, fetch this from your database or API
  // Example data - use more luxurious names and descriptions
  return [
    { id: '1', name: 'Molten Amber', price: 1299, scent: 'Resinous Amber', color: 'Deep Amber', imageUrl: 'https://picsum.photos/seed/molten-amber/600/800', description: 'Deep, resinous warmth whispering of ancient forests and golden hour.', burnTime: 45 },
    { id: '2', name: 'Velvet Orange Blossom', price: 1199, scent: 'Floral Spice', color: 'Burnt Orange', imageUrl: 'https://picsum.photos/seed/velvet-orange/600/800', description: 'Sweet neroli wrapped in velvety spice, evoking Mediterranean evenings.', burnTime: 45 },
    { id: '3', name: 'Hearthside Embers', price: 1349, scent: 'Smoky Vanilla', color: 'Warm Grey', imageUrl: 'https://picsum.photos/seed/hearthside/600/800', description: 'Crackling birchwood, smooth vanilla bean, and a hint of leather.', burnTime: 50 },
    { id: '4', name: 'Sandalwood Cashmere', price: 1399, scent: 'Woody Musk', color: 'Cream', imageUrl: 'https://picsum.photos/seed/sandalwood-cashmere/600/800', description: 'Rich sandalwood blended with soft cashmere musk and a touch of spice.', burnTime: 48 },
    { id: '5', name: 'Gilded Rosewood', price: 1249, scent: 'Floral Woody', color: 'Rose Gold', imageUrl: 'https://picsum.photos/seed/gilded-rosewood/600/800', description: 'Elegant rosewood notes brightened with hints of citrus and gold.', burnTime: 45 },
    { id: '6', name: 'Terracotta Sun', price: 1199, scent: 'Earthy Citrus', color: 'Terracotta', imageUrl: 'https://picsum.photos/seed/terracotta-sun/600/800', description: 'Sun-baked clay infused with bright bergamot and earthy vetiver.', burnTime: 40 },
    { id: '7', name: 'Spiced Pear Crumble', price: 1279, scent: 'Fruity Gourmand', color: 'Golden Brown', imageUrl: 'https://picsum.photos/seed/pear-crumble/600/800', description: 'Warm baked pear, brown sugar, cinnamon, and a hint of clove.', burnTime: 42 },
    { id: '8', name: 'Midnight Fig', price: 1329, scent: 'Sweet Earthy', color: 'Deep Plum', imageUrl: 'https://picsum.photos/seed/midnight-fig/600/800', description: 'Jammy fig nectar, dark oud, and a touch of mysterious patchouli.', burnTime: 50 },
 ];
}

export default async function StorePage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const allProducts = await getProducts();

  // Extract unique filter options from products
  const scents = [...new Set(allProducts.map(p => p.scent))].sort();
  const colors = [...new Set(allProducts.map(p => p.color))].sort();
  const minPrice = Math.min(...allProducts.map(p => p.price), 0); // Ensure min is at least 0
  const maxPrice = Math.max(...allProducts.map(p => p.price), 1000); // Ensure max has a fallback

  return (
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
       <section className="text-center py-10 fade-in"> {/* Adjusted padding */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 text-primary drop-shadow-md">Explore the Kraftika Collections</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover handcrafted candles designed to elevate your senses and transform your space into a sanctuary.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16"> {/* Increased gap */}
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
