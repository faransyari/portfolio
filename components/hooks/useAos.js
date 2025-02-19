import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAos = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out", 
      once: true, 
      ...options, 
    });
  }, [options]);
};

export default useAos;
