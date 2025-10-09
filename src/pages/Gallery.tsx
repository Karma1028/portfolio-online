import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type GalleryImage = {
  src: string;
  title?: string;
};

// Gallery images from public/Gallery folder
const GALLERY_FOLDER = "/Gallery";

// List of all images in the Gallery folder
const ALL_IMAGES: string[] = [
  "20240427_185549.jpg",
  "20240427_202511.jpg",
  "IMG_0549.jpg",
  "IMG_0552.jpg",
  "IMG_0622.JPG",
  "IMG_1681.JPG",
  "IMG_1705.jpg",
  "IMG_1722(1).jpg",
  "IMG_1722.jpg",
  "IMG_1835.jpg",
  "IMG_1908.jpg",
  "IMG_1981.jpg",
  "IMG_2013.jpg",
  "IMG_20190930_175815.jpg",
  "IMG_20191020_154943.jpg",
  "IMG_20191020_155304.jpg",
  "IMG_20191023_115308.jpg",
  "IMG_20191024_063833.jpg",
  "IMG_20191026_162447.jpg",
  "IMG_4466.JPG",
  "IMG_4934.JPG",
  "IMG_5969.JPG",
  "IMG_6293.JPG",
  "IMG_6442.JPG",
  "IMG_6594.JPG",
  "IMG_6772.JPG",
  "IMG_6873.JPG",
  "IMG_7380.JPG",
  "IMG_7734.jpg",
  "IMG_7774.JPG",
  // removed per request: IMG_8089.JPG, IMG_8536.JPG
  "IMG_8555.JPG",
  "IMG_8593.JPG",
  "IMG_8744.JPG",
];

const INITIAL_DISPLAY = 6; // Show 6 images initially for faster loading
const ROTATION_INTERVAL = 10000; // 10 seconds hold time
const TRANSITION_DURATION = 3000; // 3 seconds transition
const LAZY_LOAD_THRESHOLD = 3; // Load more images when 3 images from bottom

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Gallery = () => {
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const rotationTimerRef = useRef<NodeJS.Timeout>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Load images progressively for better performance
  useEffect(() => {
    const images: GalleryImage[] = ALL_IMAGES.map((filename) => ({
      src: `${GALLERY_FOLDER}/${filename}`,
      title: filename,
    }));
    setAllImages(images);
    
    // Initial display - select random 6 images for faster loading
    const shuffled = shuffleArray(images);
    setDisplayedImages(shuffled.slice(0, INITIAL_DISPLAY));
    setIsLoading(false);
  }, []);

  // Lazy load more images when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded && window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        const currentCount = displayedImages.length;
        if (currentCount < allImages.length) {
          const moreImages = allImages.slice(currentCount, currentCount + 6);
          setDisplayedImages(prev => [...prev, ...moreImages]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded, displayedImages.length, allImages]);

  // Image rotation effect (only when not expanded)
  useEffect(() => {
    if (isExpanded || displayedImages.length === 0 || allImages.length === 0) {
      return;
    }

    const rotateImages = () => {
      setDisplayedImages((current) => {
        // Get all images not currently displayed
        const unusedImages = allImages.filter(
          (img) => !current.some((curr) => curr.src === img.src)
        );

        if (unusedImages.length === 0) {
          // If all images are displayed, shuffle and start over
          const shuffled = shuffleArray(allImages);
          return shuffled.slice(0, INITIAL_DISPLAY);
        }

        // Replace one random image with a new one
        const randomIndex = Math.floor(Math.random() * current.length);
        const randomNewImage = unusedImages[Math.floor(Math.random() * unusedImages.length)];
        
        const newImages = [...current];
        newImages[randomIndex] = randomNewImage;
        return newImages;
      });
    };

    rotationTimerRef.current = setInterval(rotateImages, ROTATION_INTERVAL);

    return () => {
      if (rotationTimerRef.current) {
        clearInterval(rotationTimerRef.current);
      }
    };
  }, [isExpanded, displayedImages.length, allImages]);

  const handleLoadMore = () => {
    // Preserve current order, append the remaining images in their existing order
    setIsExpanded(true);
    setDisplayedImages((current) => {
      if (current.length === 0) return allImages;
      const currentSrcs = new Set(current.map((img) => img.src));
      const remaining = allImages.filter((img) => !currentSrcs.has(img.src));
      return [...current, ...remaining];
    });
  };

  const imagesToShow = isExpanded ? displayedImages : displayedImages;


  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImageIndex(null);
  };

  const showPrev = () => {
    if (activeImageIndex === null) return;
    const arr = imagesToShow;
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + arr.length) % arr.length;
    });
  };

  const showNext = () => {
    if (activeImageIndex === null) return;
    const arr = imagesToShow;
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % arr.length;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-center h-[60vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <Loader2 className="h-12 w-12 animate-spin text-orange-500 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Loading gallery...</p>
              <p className="text-sm text-muted-foreground mt-2">Optimizing images for faster loading...</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
            Visual Stories
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured through my lens—a collection of memories, places, and perspectives
          </p>
        </motion.div>

        {/* Gallery Grid */}
        {!isExpanded ? (
          // Initial State - Masonry-style grid with focus cards hover effects
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto"
          >
            <AnimatePresence mode="popLayout">
              {imagesToShow.map((img, idx) => {
                // Create varied heights for masonry effect - 12 different sizes
                const heights = [
                  "row-span-1", // small
                  "row-span-2", // medium
                  "row-span-1", // small
                  "row-span-3", // large
                  "row-span-2", // medium
                  "row-span-1", // small
                  "row-span-2", // medium
                  "row-span-1", // small
                  "row-span-2", // medium
                  "row-span-1", // small
                  "row-span-3", // large
                  "row-span-2", // medium
                ];
                const heightClass = heights[idx % heights.length];

                return (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: TRANSITION_DURATION / 1000,
                      ease: "easeInOut"
                    }}
                    className={`group relative overflow-hidden rounded-2xl border-2 border-border hover:border-accent shadow-lg hover:shadow-2xl transition-all duration-500 ${heightClass} ${
                      hoveredIndex !== null && hoveredIndex !== idx ? "blur-sm scale-[0.98]" : ""
                    }`}
                    onClick={() => openLightbox(idx)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={img.src}
                      alt={img.title ?? `Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      style={{ 
                        background: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Expanded State - keep masonry-like feel by repeating the same height pattern
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto"
          >
            {imagesToShow.map((img, idx) => {
              const heights = [
                "row-span-1",
                "row-span-2",
                "row-span-1",
                "row-span-2",
                "row-span-2",
                "row-span-1",
                "row-span-2",
                "row-span-1",
              ];
              const heightClass = heights[idx % heights.length];
              return (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02, duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl border-2 border-border hover:border-accent shadow-lg hover:shadow-2xl transition-all duration-500 ${heightClass} ${
                    hoveredIndex !== null && hoveredIndex !== idx ? "blur-sm scale-[0.98]" : ""
                  }`}
                  onClick={() => openLightbox(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={img.src}
                    alt={img.title ?? `Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && activeImageIndex !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center px-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-[92vw] w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  aria-label="Close"
                  className="absolute -top-12 right-0 text-white/80 hover:text-white text-lg"
                  onClick={closeLightbox}
                >
                  ✕
                </button>
                <div className="flex items-center justify-center gap-4 max-h-[86vh]">
                  <button
                    aria-label="Previous"
                    className="shrink-0 text-white/80 hover:text-white text-3xl select-none px-2"
                    onClick={showPrev}
                  >
                    ‹
                  </button>
                  <div className="relative flex items-center justify-center">
                    <img
                      src={imagesToShow[activeImageIndex].src}
                      alt={imagesToShow[activeImageIndex].title ?? "Preview"}
                      className="max-h-[86vh] max-w-[86vw] object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                  <button
                    aria-label="Next"
                    className="shrink-0 text-white/80 hover:text-white text-3xl select-none px-2"
                    onClick={showNext}
                  >
                    ›
                  </button>
                </div>
                <div className="mt-3 text-center text-white/80 text-sm truncate">
                  {imagesToShow[activeImageIndex].title}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {!isExpanded && allImages.length > INITIAL_DISPLAY && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center mt-10 md:mt-12"
          >
            <Button
              onClick={handleLoadMore}
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Load More Images
            </Button>
          </motion.div>
        )}

        {/* Subtle hint about rotation */}
        {!isExpanded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center text-xs md:text-sm text-muted-foreground mt-8 italic"
          >
            Images rotate every few seconds—each view tells a different story
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
