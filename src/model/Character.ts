import {Origin} from "./Origin";

export type Character = {
    id: number,
    name: string,
    origin: Origin,
    status: string,
    image: string,
    episode: string[],
}