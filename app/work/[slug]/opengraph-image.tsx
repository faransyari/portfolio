import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/portfolio";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Project case study";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const name = project?.name ?? "Project";
  const tech = project?.technologies.join(" · ") ?? "";
  const year = project?.year ?? "";
  const techYear = tech + (year ? `  ·  ${year}` : "");
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#f5f5f5", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#8c8c8c", textTransform: "uppercase" }}>Firlandi Althaf Ansyari — Work</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 600 }}>{name}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#8c8c8c", marginTop: 20 }}>{techYear}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
