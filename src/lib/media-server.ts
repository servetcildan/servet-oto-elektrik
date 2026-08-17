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

function resolvePosterSrc(filename: string): string | null {
  const besideVideo = `${VIDEO_DIR}/${filename}`;
  const inPostersDir = `${POSTER_DIR}/${filename}`;

  if (existsInPublic(besideVideo)) {
    return besideVideo;
  }

  if (existsInPublic(inPostersDir)) {
    return inPostersDir;
  }

  return null;
}

/**
 * Medya dosyalarının varlığı derleme sırasında kontrol edilir. Poster JPEG'ler
 * videonun yanında (`/videos`) veya `videos/posters` içinde aranır.
 */
export function getResolvedMedia(): ResolvedMedia[] {
  return workMedia.map((item) => {
    const videoPath = `${VIDEO_DIR}/${item.file}`;

    return {
      ...item,
      videoSrc: existsInPublic(videoPath) ? videoPath : null,
      posterSrc: resolvePosterSrc(item.poster),
    };
  });
}