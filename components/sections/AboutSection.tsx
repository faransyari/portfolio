import Image from "next/image";
import "../../styles/globals.css";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-5 bg-gray-950 text-white font-['Roboto']"
        >
            <div
                data-aos="fade-up"
                className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-14"
            >
                <div className="rounded-3xl p-10 md:p-16 mt-20">
                    <h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-400 mb-6">
                        About Me
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center">
                        Software Engineer with dual degrees from the
                        <span className="text-blue-300 font-semibold"> University of Queensland</span> and
                        <span className="text-blue-300 font-semibold"> University of Indonesia</span>. Specialized in fullstack development, mobile development, and data engineering.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-400 text-center mb-6">
                                Programming Languages
                            </h3>
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {[{
                                    name: "C++",
                                    src: "/images/cpp-icon.png",
                                    bg: "bg-blue-500/20",
                                }, {
                                    name: "Java",
                                    src: "/images/java-icon.png",
                                    bg: "bg-red-500/20",
                                }, {
                                    name: "Python",
                                    src: "/images/python-icon.png",
                                    bg: "bg-blue-400/20",
                                }, {
                                    name: "PHP",
                                    src: "/images/php-icon.png",
                                    bg: "bg-indigo-600/20",
                                }, {
                                    name: "JavaScript",
                                    src: "/images/javascript-icon.png",
                                    bg: "bg-yellow-300/20",
                                }, {
                                    name: "TypeScript",
                                    src: "/images/typescript-icon.png",
                                    bg: "bg-blue-500/20",
                                }, {
                                    name: "Dart",
                                    src: "/images/dart-icon.png",
                                    bg: "bg-cyan-400/20",
                                }, {
                                    name: "GO",
                                    src: "/images/go-icon.png",
                                    bg: "bg-sky-500/20",
                                }, {
                                    name: "Swift",
                                    src: "/images/swift-icon.png",
                                    bg: "bg-red-400/20",
                                }].map((lang, i) => (
                                    <div
                                        key={i}
                                        className={`relative group rounded-2xl ${lang.bg} shadow-md flex justify-center items-center p-4 aspect-square hover:scale-110 transition-transform duration-200`}
                                    >
                                        <Image
                                            src={lang.src}
                                            alt={lang.name}
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                                            {lang.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-400 text-center mb-6">
                                Frameworks & Libraries
                            </h3>
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {[{
                                    name: "React",
                                    src: "/images/react-icon.png",
                                    bg: "bg-cyan-300/20",
                                }, {
                                    name: "Next.js",
                                    src: "/images/nextjs-icon.png",
                                    bg: "bg-gray-400/20",
                                }, {
                                    name: "Node.js",
                                    src: "/images/nodejs-icon.png",
                                    bg: "bg-green-400/20",
                                }, {
                                    name: "Spring Boot",
                                    src: "/images/springboot-icon.png",
                                    bg: "bg-lime-500/20",
                                }, {
                                    name: "Django",
                                    src: "/images/django-icon.png",
                                    bg: "bg-green-900",
                                }, {
                                    name: "Laravel",
                                    src: "/images/laravel-icon.png",
                                    bg: "bg-red-500/20",
                                }, {
                                    name: "CodeIgniter",
                                    src: "/images/codeigniter-icon.png",
                                    bg: "bg-orange-600/20",
                                }, {
                                    name: "Flutter",
                                    src: "/images/flutter-icon.png",
                                    bg: "bg-blue-800/20",
                                }].map((framework, i) => (
                                    <div
                                        key={i}
                                        className={`relative group rounded-2xl ${framework.bg} shadow-md flex justify-center items-center p-4 aspect-square hover:scale-110 transition-transform duration-200`}
                                    >
                                        <Image
                                            src={framework.src}
                                            alt={framework.name}
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                                            {framework.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Web & Databases */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-400 text-center mb-6">
                                Web & Databases
                            </h3>
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {[{
                                    name: "CSS",
                                    src: "/images/css-icon.png",
                                    bg: "bg-blue-500/20",
                                }, {
                                    name: "HTML",
                                    src: "/images/html-icon.png",
                                    bg: "bg-orange-400/20",
                                }, {
                                    name: "Bootstrap",
                                    src: "/images/bootstrap-icon.png",
                                    bg: "bg-purple-800/20",
                                }, {
                                    name: "Tailwind CSS",
                                    src: "/images/tailwind-icon.png",
                                    bg: "bg-sky-400/20",
                                }, {
                                    name: "PostgreSQL",
                                    src: "/images/postgresql-icon.png",
                                    bg: "bg-blue-800/20",
                                }, {
                                    name: "MySQL",
                                    src: "/images/mysql-icon.png",
                                    bg: "bg-blue-600/20",
                                }].map((tech, i) => (
                                    <div
                                        key={i}
                                        className={`relative group rounded-2xl ${tech.bg} shadow-md flex justify-center items-center p-4 aspect-square hover:scale-110 transition-transform duration-200`}
                                    >
                                        <Image
                                            src={tech.src}
                                            alt={tech.name}
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
