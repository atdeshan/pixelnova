/**
 * PIXELNOVA — Image Paths
 *
 * Swap these values when real assets are available.
 *
 * 1. Drop your PNGs into `/public/images/` with the matching filenames below.
 * 2. Set USE_REMOTE_PLACEHOLDERS to `false`.
 * 3. The site renders your real assets, no further code changes needed.
 *
 * Asset specs:
 *   hero       — 4:5 aspect, ~1600px+ wide, classical figure with laptop
 *   about      — 4:5 aspect, ~1200px+, brain/circuit duality
 *   contact    — landscape, ~1600px+, ethereal/wireframe head
 *   work[0..4] — 16:10 aspect, ~1200px+, project thumbnails
 */

const USE_REMOTE_PLACEHOLDERS = false;

const REMOTE = {
  hero: "https://images.unsplash.com/photo-1564399579883-451a5cb6a05f?w=1600&auto=format&fit=crop&q=85",
  about: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=85",
  contact: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=1600&auto=format&fit=crop&q=85",
  work: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=900&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&auto=format&fit=crop&q=85",
  ],
};

const LOCAL = {
  hero: "/images/hero-statue.png",
  about: "/images/about-brain.png",
  contact: "/images/contact-wireframe.png",
  work: [
    "/images/work-01.png",
    "/images/work-02.png",
    "/images/work-03.png",
    "/images/work-04.png",
    "/images/work-05.png",
  ],
};

export const IMG = USE_REMOTE_PLACEHOLDERS ? REMOTE : LOCAL;
