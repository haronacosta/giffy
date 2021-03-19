const apiKey = 'oghCEUTSD7w8RlQ8os2Hm3CRuKRgCtxd';

export default function getGifts({ keyword = 'cr7' } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response;
      const gifts = data.map((gif) => gif.images.fixed_height_downsampled.url);

      return gifts;
    });
}
