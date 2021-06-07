export interface Producto {
    id:          string;
    brand:       string;
    description: string;
    image:       string;
    price:       number;
    amount?:     number;
    total?:      number;
}