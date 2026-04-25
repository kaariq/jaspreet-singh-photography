import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">This thread came loose. Let's stitch you home.</p>
        <Link to="/" className="mt-8 inline-block border-b border-accent text-accent uppercase tracking-[0.2em] text-xs pb-1">Return home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kaariq — Bespoke Tailoring & Boutique" },
      { name: "description", content: "Kaariq is a contemporary tailoring & boutique studio crafting bespoke ethnic and modern wear with doorstep measurements and worldwide delivery." },
      { property: "og:title", content: "Kaariq — Bespoke Tailoring & Boutique" },
      { property: "og:description", content: "Bespoke tailoring, boutique collections, and personal styling — measured to you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
