export type Product = {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    price?: number;
    description?: string;
    thumbnailImage?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    images?: {
      asset: {
        _ref: string;
        _type: string;
      };
    }[];
    customizations?: {
      label: string;
      options: string[];
    }[];
    category: {
      _id: string;
      name: string;
      slug: {
        current: string;
      };
    };
  }


  export type ProductCategory = {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    products?: Product[];
    bestSellers?: Product[];
  }
  