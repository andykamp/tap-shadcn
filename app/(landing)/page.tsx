import { Features } from "./_components/features";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Features />

    </main>
  )
}
