import { GIPHY_API_KEY } from "../api.key";
import { GifData } from "../types/gifData.interface";
import { GiphyApiResponse, GiphyData } from "../types/giphy-api-response";
import { GetGifsParameters } from "./api.interface";

const apiEndpoint = "https://api.giphy.com/v1/gifs/search?api_key=";

export function getGifsFromApi(params: GetGifsParameters) {
    const url =`${apiEndpoint}${GIPHY_API_KEY}&q=${params.filter}&limit=25&offset=${
        params.currentPage
      }&rating=PG-13&lang=en`;
      console.log(url);
  return fetch(
    `${apiEndpoint}${GIPHY_API_KEY}&q=${params.filter}&limit=25&offset=${
      params.currentPage
    }&rating=PG-13&lang=en`
  )
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
