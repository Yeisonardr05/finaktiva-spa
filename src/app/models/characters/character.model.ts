import { ComicModel } from "../comics/comic.model";
import { ThumbnailModel } from "../common/thumbnail.model";

export class CharacterModel {
    public id: number;
    public name: string;
    public description: string;
    public resourceURI: string;
    public thumbnail: ThumbnailModel;
    public comics: ComicModel;
}