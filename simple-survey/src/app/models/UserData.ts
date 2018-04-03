import { Address } from "./Address";
export class UserData {
    public constructor(init?: Partial<UserData>) {
        Object.assign(this, init);
    }
    public UserDataId: number;
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public Address: Address;
    public Created: string;
    public Modified: Date[];
}