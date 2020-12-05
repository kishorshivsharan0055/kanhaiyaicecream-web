export type ProductDetails = {
  product_id: number;
  main_title: string;
  main_img: string;
  description: string;
  semidescription: string;
  subproducts: Array<{
    title: string;
    img: string;
  }>;
};
