import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

export const runtime = "nodejs";
export const alt = "Firlandi Althaf Ansyari — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#f5f5f5", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#8c8c8c", textTransform: "uppercase" }}>Software Engineer</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 600, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 32, color: "#8c8c8c", marginTop: 24, maxWidth: 900 }}>{profile.tagline}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
