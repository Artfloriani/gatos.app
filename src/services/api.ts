import { GifData } from "../types/gifData.interface";
import { GiphyApiResponse, GiphyData } from "../types/giphy-api-response";
import { GetGifsParameters } from "./api.interface";

export function getGifsFromApi(parms: GetGifsParameters) {
  return fetch("http://localhost:3004/response")
    .then(response => response.json())
    .then((json: GiphyApiResponse) => {
      return {
        response: {
          currentPage: json.pagination.offset,
          gifs: mapGiphyApiResponse(json.data)
        }
      };
    })
    .catch(err => ({ err }));
}

const mapGiphyApiResponse = (data: GiphyData[]): GifData[] => {
  return data.map(el => {
    return { url: el.images.fixed_width.url, id: el.id };
  });
};
