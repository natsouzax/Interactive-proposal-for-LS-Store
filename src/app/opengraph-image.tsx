import { buildShareImage } from "@/lib/share-image";

export const alt = "LS Store — O futuro do varejo digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildShareImage(size);
}
