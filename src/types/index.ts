export interface Product {
  Description: string;
  DiscountedPrice: number;
  Id: number;
  Images: Image[];
  Name: string;
  Price: number;
  Quantity: number;
  Unit: string;
  Currency?: string;
}

export interface Image {
  FileName: string;
  FileExtension: string;
  Image: string;
}

export interface ResponseProduct {
  Description: string;
  DiscountedPrice: number;
  Id: number;
  Images: Image[];
  Name: string;
  Price: number;
  Quantity: number;
  Unit: string;
  Сurrency?: string;
}
