import { GifData } from "../types/gifData.interface";

export interface AppComponentProps {
    gifs: GifData[];
    filter: string;
    isFetching: boolean;
    currentPage: number;
    loadGifs: () => void;
    updateFilter: (filter: string) => void;
}