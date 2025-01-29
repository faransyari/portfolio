import Image from "next/image";
import { BackgroundLines } from "../components/ui/background-lines";

export default function MobileNotice() {
  return (
    <BackgroundLines
      className="relative min-h-screen overflow-hidden"
      svgOptions={{ duration: 15 }} // Customize animation duration as needed
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
          padding: "2rem",
          background: "#121212",
          color: "#b0c4de",
          width: "100vw", // Ensure it takes the full width of the viewport
          boxSizing: "border-box", // Include padding in the element's total width and height
        }}
      >
        <Image
          src="/images/desktop-icon.png"
          alt="Desktop Only Icon"
          width={300}
          height={300}
          style={{ marginBottom: "2rem" }}
        />
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#82b1ff" }}>
          Desktop Only
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8rem" }}>
          We&apos;re sorry, but this website is not yet optimized for mobile devices.
          <br />
          Please open it on a desktop for the best experience.
        </p>
      </div>
    </BackgroundLines>
  );
}
