const apiKey = 'oghCEUTSD7w8RlQ8os2Hm3CRuKRgCtxd';

export default function getGifts({ keyword = 'cr7' } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response;
      const gifts = data.map((gif) => {
        const url = gif.images.original.url;

        const { id, title } = gif;

        return { url, title, id };
      });

      return gifts;
    });
}
