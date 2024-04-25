import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo } from "../utils";


const Hero = () => {


  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col mt-5">
        <p id="hero" className="hero-title">
          Mercedes-Benz
        </p>
        <div className="flex items-center justify-center h-screen">
          <div className="md:w-10/12 w-18/24">
            <img
              src={heroVideo}
              alt="Description"
              className="mx-auto pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Explore
        </a>
      </div>
    </section>
  );
};

export default Hero;
