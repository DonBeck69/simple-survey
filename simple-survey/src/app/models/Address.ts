export class Address {
    public constructor(init?: Partial<Address>) {
        Object.assign(this, init);
    }
    public StreetNumber: string;
    public StreetName: string;
    public ApartmentNumber: string;
    public City: string;
    public Region: string;
    public Code: string;
    public Country: string;
}