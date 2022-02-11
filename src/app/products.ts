export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone Ultra',
    price: 1099,
    description: 'A large phone with one of the best screens and extended functionality'
  },
  {
    id: 2,
    name: 'Phone Lite',
    price: 299,
    description: 'The lite version may have limited functionality'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 799,
    description: ''
  }
];
