import { MAX_RESULTS, PAGE_SIZE } from "../constants";
import { GifData } from "../types/gif-data.interface";
import { GiphyApiResponse, GiphyData } from "../types/giphy-api-response";
import { GetGifsParameters } from "./api.interface";

const apiEndpoint = "https://api.giphy.com/v1/gifs/search?api_key=";

export function getGifsFromApi(params: GetGifsParameters) {
  // const offset = params.currentPage * PAGE_SIZE;
  // This is a test to make everything random
  const randomPage = Math.floor(Math.random() * (MAX_RESULTS / PAGE_SIZE));
  const url = `${apiEndpoint}${process.env.REACT_APP_GIPHY_API_KEY}&q=${
    params.filter
  }&limit=${PAGE_SIZE}&offset=${randomPage}&rating=PG-13&lang=en`;
  return fetch(url)
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
    return { url: el.images.fixed_width.webp, id: el.id };
  });
};
