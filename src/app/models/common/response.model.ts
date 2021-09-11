import { DataModel } from "./data.model";

export class ResponseModel<T> {
    public code: number;
    public status: string;
    public copyright: string;
    public attributionText: string;
    public attributionHTML: string;
    public etag: string;
    public data: DataModel<T>;
}