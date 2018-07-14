import { GifData } from "./gifData.interface";

export interface GifsState {
    isFetching: boolean,
    currentPage: number,
    filter: string,
    gifs: GifData[],
    lastUpdated?: number,
    searchQuery: string
}

export interface FilterButtonType {
    text: string,
    searchQuery: string
}