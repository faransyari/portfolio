export default function ContactSection() {
    return (
        <footer id="contact" style={{ padding: "2rem", background: "rgba(255, 255, 255, 0.05)" }}>
        <div
            style={{
            padding: "2rem",
            background: "rgba(255, 255, 255, 0)",
            borderRadius: "16px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            }}
        >
            <h2 style={{ fontSize: "2rem", color: "#82b1ff", marginBottom: "1rem" }}>Contact Me</h2>
            <p style={{ color: "#b0c4de", marginBottom: "1.5rem" }}>
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me:
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
                <strong>Email:</strong>{" "}
                <a
                href="mailto:firlandi.althaf@gmail.com"
                style={{ color: "#82b1ff", textDecoration: "none" }}
                >
                firlandi.althaf@gmail.com
                </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
                <strong>LinkedIn:</strong>{" "}
                <a
                href="https://linkedin.com/in/firlandi"
                style={{ color: "#82b1ff", textDecoration: "none" }}
                >
                linkedin.com/in/firlandi
                </a>
            </li>
            <li>
                <strong>Phone:</strong> +61423704207
            </li>
            </ul>
        </div>
    </footer>
    );
}