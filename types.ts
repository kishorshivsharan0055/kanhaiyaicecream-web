export type ProductDetails = {
  product_id: number;
  title: string;
  img: string;
  description: string;
  semidescription: string;
  subproducts: Array<{
    title: string;
    img: string;
  }>;
};
