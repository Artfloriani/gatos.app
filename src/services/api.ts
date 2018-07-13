import { GifData } from "../types/gifData.interface";
import { GiphyData } from "../types/giphy-api-response";

export function getGifsFromApi() {
  return fetch("http://localhost:3004/data")
    .then(response => response.json())
    .then(json => mapGiphyApiResponse(json))
    .then(response => ({ response }))
    .catch(err => ({ err }));
}

const mapGiphyApiResponse = (data: GiphyData[]): GifData[] => {
  return data.map(el => {
    return { url: el.images.fixed_width.url, id: el.id };
  });
};
