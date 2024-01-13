import {Address} from "./address";
import {Cart} from "./cart";
import { Wishlist } from "./wishlist";


export interface CustomerInterface {

    ID?: string;
    Email?: string;
    FirstName?: string;
    LastName?: string;
    Dateofbirth?:Date;
    Gender?:string;
    Contact?:string;
    Username?: string;
    Password?: string;

    //fk
    Addresses?: Address;
    Wishlists?: Wishlist;
    Carts?: Cart;

  }
