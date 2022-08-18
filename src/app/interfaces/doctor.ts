import { Company } from "./company";
import { Address } from "./address";

export interface Doctor {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company?: Company;
}
