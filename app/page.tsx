import { ThemeToggle } from "../components/theme/ThemeToggle";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed top-4 right-4 z-50"><ThemeToggle /></div>
      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio (rebuilding)</h1>
      </section>
    </main>
  );
}
