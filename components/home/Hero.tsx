import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Where Fashion Reigns Supreme
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Welcome to Empire Attire—where fashion meets power. Discover bold,
          timeless pieces designed for every occasion. From casual comfort to
          high-end elegance, we bring you luxury, confidence, and style. Join
          the empire. Rule your look.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}
export default Hero
