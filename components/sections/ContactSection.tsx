export default function ContactSection() {
    return (
        <footer id="contact" className="bg-black py-8 text-white">
            <div className="max-w-xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold text-blue-300 mb-2">Get in Touch</h2>
                <p className="text-slate-400 mb-4 text-base">
                    I'm always open to new opportunities and collaborations. Reach out via:
                </p>
                <ul className="space-y-2 text-slate-200 text-sm">
                    <li>
                        <span className="font-medium">Email:</span>{" "}
                        <a
                            href="mailto:firlandi.althaf@gmail.com"
                            className="text-blue-400 hover:underline"
                        >
                            firlandi.althaf@gmail.com
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">LinkedIn:</span>{" "}
                        <a
                            href="https://linkedin.com/in/firlandi"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/firlandi
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Phone:</span> +61 423 704 207
                    </li>
                </ul>
                <p className="mt-6 text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Firlandi Ansyari. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
