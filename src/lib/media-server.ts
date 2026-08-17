import fs from "node:fs";
import path from "node:path";
import { POSTER_DIR, VIDEO_DIR, workMedia, type WorkMedia } from "./media";

export type ResolvedMedia = WorkMedia & {
  videoSrc: string | null;
  posterSrc: string | null;
};

const publicDir = path.join(process.cwd(), "public");

function existsInPublic(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(publicDir, publicPath.replace(/^\//, "")));
  } catch {
    return false;
  }
}

/**
 * Medya dosyalarının varlığı derleme sırasında kontrol edilir; eksik dosyalar
 * için oynatıcı yerine premium bir yer tutucu gösterilir, kırık öğe oluşmaz.
 */
export function getResolvedMedia(): ResolvedMedia[] {
  return workMedia.map((item) => {
    const videoPath = `${VIDEO_DIR}/${item.file}`;
    const posterPath = `${POSTER_DIR}/${item.poster}`;

    return {
      ...item,
      videoSrc: existsInPublic(videoPath) ? videoPath : null,
      posterSrc: existsInPublic(posterPath) ? posterPath : null,
    };
  });
}