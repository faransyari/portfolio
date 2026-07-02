import Link from "next/link";
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/chrome/Footer";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="grid min-h-[70vh] place-items-center">
        <Container className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link href="/" className="mt-8 inline-block rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">Back home</Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
