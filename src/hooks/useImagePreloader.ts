import { useEffect, useState } from "react";

interface UseImagePreloaderOptions {
  minDuration?: number;
  maxDuration?: number;
}

export const useImagePreloader = (
  urls: string[],
  { minDuration = 1000, maxDuration = 4000 }: UseImagePreloaderOptions = {},
) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const start = Date.now();

    const finish = () => {
      if (cancelled) return;
      const remaining = Math.max(minDuration - (Date.now() - start), 0);
      window.setTimeout(() => {
        if (!cancelled) setReady(true);
      }, remaining);
    };

    const loadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });

    const maxTimer = window.setTimeout(finish, maxDuration);

    Promise.all(urls.map(loadImage)).then(() => {
      window.clearTimeout(maxTimer);
      finish();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(maxTimer);
    };
  }, [urls, minDuration, maxDuration]);

  return ready;
};
