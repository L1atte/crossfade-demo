import { unsplash } from './service';

function loadImage(src?: string): Promise<HTMLImageElement> {
  if (!src) return Promise.reject();

  const image = new Image();

  return new Promise((resolve, reject) => {
    image.onload = () => resolve(image);
    image.onerror = err => reject(err);
    image.src = src;
  });
}

const searchPhotos = (keywords: string[]) => {
  const promises = keywords.map(keyword => {
    return unsplash.search
      .getPhotos({
        query: `${keyword} nature view`,
        orientation: 'landscape',
        perPage: 30,
      })
      .then(res => res.response?.results ?? null)
      .catch(err => {
        throw err;
      });
  });

  return Promise.all(promises);
};

const preloadPhotos = (urls: string[]) => {
  const promises: PromiseLike<HTMLImageElement>[] = urls.map(url => {
    return loadImage(url);
  });

  return Promise.allSettled(promises);
};

export { loadImage, searchPhotos, preloadPhotos };
