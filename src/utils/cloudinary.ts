// Cloudinary delivery helpers.
//
// The raw asset URLs point at full-size originals (images up to ~5 MB, videos
// up to ~28 MB), which is what made the site crawl on mobile. Inserting a
// transformation segment after `/upload/` makes Cloudinary serve a resized,
// re-encoded copy instead - WebP/AVIF for images, a lower-bitrate MP4 for
// video - without changing the stored original.

const IMAGE_TX = "f_auto,q_auto,c_limit,w_1600,dpr_auto";
const POSTER_TX = "f_auto,q_auto,c_limit,w_1200,so_0";
const VIDEO_TX = "f_auto,q_auto:eco,vc_auto,c_limit,w_1280,br_1600k";

const UPLOAD = "/upload/";

const isCloudinary = (url: string) => url.includes("res.cloudinary.com");

// Already-transformed URLs carry a transformation segment right after
// /upload/; a bare version segment looks like `v1782910950`.
const hasTransform = (url: string) => {
  const after = url.split(UPLOAD)[1] ?? "";
  const first = after.split("/")[0] ?? "";
  return first !== "" && !/^v\d+$/.test(first);
};

const withTransform = (url: string, tx: string) => {
  if (!isCloudinary(url) || !url.includes(UPLOAD) || hasTransform(url)) return url;
  return url.replace(UPLOAD, `${UPLOAD}${tx}/`);
};

export const cldImage = (url: string) => withTransform(url, IMAGE_TX);
export const cldVideo = (url: string) => withTransform(url, VIDEO_TX);

/** Derive a lightweight poster frame from a Cloudinary video URL. */
export const cldPoster = (url: string) =>
  withTransform(url, POSTER_TX).replace(/\.(mp4|mov|webm)(\?|$)/i, ".jpg$2");

/**
 * Walk any data structure and rewrite Cloudinary URLs in place.
 * Video URLs get video transforms, everything else gets image transforms.
 */
export function optimizeMedia<T>(value: T): T {
  if (typeof value === "string") {
    if (!isCloudinary(value)) return value;
    return (value.includes("/video/upload/") ? cldVideo(value) : cldImage(value)) as unknown as T;
  }
  if (Array.isArray(value)) return value.map(optimizeMedia) as unknown as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = optimizeMedia(v);
    return out as T;
  }
  return value;
}
