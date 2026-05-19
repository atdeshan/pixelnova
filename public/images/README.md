# Image assets

Drop your real PNGs here using these exact filenames:

| Filename                  | Aspect ratio | Min resolution | Used for                |
|---------------------------|--------------|----------------|-------------------------|
| `hero-statue.png`         | 4:5          | 1600 × 2000    | Hero section            |
| `about-brain.png`         | 4:5          | 1200 × 1500    | About section image     |
| `contact-wireframe.png`   | 16:9 or wider| 1600 × 900     | Contact ambient bg      |
| `work-01.png`             | 16:10        | 1200 × 750     | Project I thumbnail     |
| `work-02.png`             | 16:10        | 1200 × 750     | Project II thumbnail    |
| `work-03.png`             | 16:10        | 1200 × 750     | Project III thumbnail   |
| `work-04.png`             | 16:10        | 1200 × 750     | Project IV thumbnail    |
| `work-05.png`             | 16:10        | 1200 × 750     | Project V thumbnail     |

Then open `lib/images.ts` and set:

```ts
const USE_REMOTE_PLACEHOLDERS = false;
```

The site will now use the files in this folder instead of placeholders.

---

## Exporting from Photoshop (correctly)

`File → Export → Export As...`

Then in the dialog:
- Format: **PNG**
- Transparency: **checked**
- Click **Export**

**Don't use `Save As`** — that's where the JPEG-renamed-to-PNG issue comes from.

To verify a PNG is genuinely transparent: open it in Preview (Mac) or Photos (Windows) — you should see a **checkerboard pattern** behind the subject, not solid color.
