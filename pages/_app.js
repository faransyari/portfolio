import { useEffect } from "react";
import { useRouter } from "next/router";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const excludedPaths = ["/mobile-notice"]; // Add paths you want to exclude
    if (isMobile && !excludedPaths.includes(router.pathname)) {
      router.push("/mobile-notice");
    }
  }, [router]);  

  return <Component {...pageProps} />;
}

export default MyApp;
