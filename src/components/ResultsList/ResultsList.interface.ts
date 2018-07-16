import { GifData } from "../../types/gif-data.interface";

export interface ResultsListProps {
    gifs: GifData[],
    isFetching?: boolean,
    loadMore?: () => void
}