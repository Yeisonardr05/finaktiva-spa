export class DataModel<T> {
    public offset: number;
    public limit: number;
    public total: number;
    public count: number;
    public results: T;
}