import { PriceModel } from "../common/price.model";
import { ThumbnailModel } from "../common/thumbnail.model";

export class ComicModel {
    public id: number;
    public title: string;
    public description: string;
    public diamondCode: string;
    public format: string;
    public issueNumber: number;    
    public collectionURI: string;
    public thumbnail: ThumbnailModel;    
    public prices: PriceModel[];
    public isDisable: boolean;
    public price: number;     
}