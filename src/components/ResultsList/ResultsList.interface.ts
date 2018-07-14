import { GifData } from "../../types/gifData.interface";

export interface ResultsListProps {
    gifs: GifData[],
    isFetching?: boolean,
    loadMore?: () => void
}