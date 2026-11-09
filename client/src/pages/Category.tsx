import { useParams } from "wouter";
import { getCategoryBySlug, destinationsInCategory } from "@/lib/categories";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DestinationCard } from "@/components/DestinationCard";
import { CategoryLinks } from "@/components/CategoryFilter";
import NotFound from "./NotFound";

export default function Category() {
  const params = useParams<{ slug: string }>();
  const category = getCategoryBySlug(params.slug);
  if (!category) return <NotFound />;

  const list = destinationsInCategory(category.name).sort((a, b) => a.distance - b.distance);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: category.name }]} />

        <div className="container mx-auto px-4 py-12">
          <header className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-700">
              {list.length} destinos · do mais perto ao mais longe da capital
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900">{category.name}</h1>
            <div className="space-y-4">
              {category.intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </header>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Destinos de {category.name}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((d) => (
                <DestinationCard key={d.id} destination={d} />
              ))}
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Outros estilos de viagem</h2>
            <CategoryLinks activeSlug={category.slug} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
