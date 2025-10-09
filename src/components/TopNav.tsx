import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Journey", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const MEDIUM_URL = "https://medium.com/@tuhin.gim";

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setIsScrolled(current > 0.1);
    }
  });

  // Hide navbar on landing page
  if (location.pathname === "/") {
    return null;
  }

  // Subtle interactive parallax/3D tilt
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const isActive = useMemo(() => {
    const path = location.pathname;
    return (href: string) => path === href;
  }, [location.pathname]);

  return (
    <motion.nav
      className="fixed top-4 inset-x-0 z-50"
    >
      <div className="px-2 sm:px-4">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
          style={{
            transformStyle: "preserve-3d",
            rotateX: springX as unknown as number,
            rotateY: springY as unknown as number,
          }}
            className={cn(
              "flex max-w-fit mx-auto border border-transparent dark:border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 pl-10 py-3 items-center justify-center space-x-8 transition-all duration-300",
              isScrolled 
                ? "dark:bg-black/70 bg-white/70 backdrop-blur-md" 
                : "dark:bg-black bg-white"
            )}
        >
            {/* Logo on the left */}
            <button
              aria-label="Back"
              onClick={() => navigate("/")}
              className="shrink-0 inline-flex items-center gap-2 rounded-xl px-2.5 py-2 active:scale-[.98] transition-all hover:bg-accent/60 hover:text-accent-foreground"
            >
              <img
                src="/lovable-uploads/1d769ae6-56df-451f-af6b-3cd746a40cbb.png"
                alt="Logo"
                className="h-6 w-auto"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </button>

                      {/* Navigation items in center */}
                      {NAV_ITEMS.map((item, idx) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-sm transition-colors duration-200",
                            location.pathname === item.href && "text-orange-600 dark:text-orange-400 font-semibold"
                          )}
                        >
                          <span className="hidden sm:block">{item.label}</span>
                          {location.pathname === item.href && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                              initial={false}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      ))}

            {/* Medium link on the right */}
            <a
              href={MEDIUM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-accent/60 transition-colors"
            >
              <span>Medium</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default TopNav;


