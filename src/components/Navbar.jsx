import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";

import { LiaCocktailSolid } from "react-icons/lia";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(50px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <nav>
      <div>
        <a href="#" className="flex items-center gap-2">
          <LiaCocktailSolid className="size-9 text-yellow" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link, index) => (
            <a href={`#${link.id}`} key={index}>
              {link.title}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
