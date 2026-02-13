

export type Product = {
  id: string;
  name: string;
  brand: string;
  style: string;
  material: string;
  color: string;
  dimensions: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
  experience?: ExperienceConfig;
};


export type ProductGroup = {
  category: string;
  selected: Product;
  alternatives: Product[];
};

export type LayoutType = {
  id: string;
  spaceId: string;
  styleId: string;
  image: string;
  products: ProductGroup[];
  experience?: ExperienceConfig;
};

export type ExperienceConfig = {
  model?: {
    glb: string;
    usdz: string;
    poster?: string;
  };

  ar?: {
    enabled: boolean;
    iosSrc?: string;
    scale?: {
      min?: string;
      max?: string;
    };
  };

  qr?: {
    enabled: boolean;
    size?: number;
  };
};




