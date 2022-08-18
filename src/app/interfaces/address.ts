import { Coordinate } from "./coordinate";
export interface Address {
  street?: string;
  suite?: string;
  city: string;
  zipcode?: string;
  geo?: Coordinate;
}
