import { Address } from "./Address";
import { Results } from "./Results";
export class User {
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
        this.Modified = new Array<string>();
        this.UserResults = new Array<Results>();
    }
    public UserDataId: number;
    public Data: Data;
    public Created: string;
    public Modified: string[];
    public UserResults: Results[];

}

export class Data {
    public constructor(init?: Partial<Data>) {
        Object.assign(this, init);
    }
    public UserName: string;
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public Address: Address;
}