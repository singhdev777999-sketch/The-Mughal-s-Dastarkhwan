export type MealCategory =
  | 'all'
  | 'kebabs'
  | 'biryani_nihari'
  | 'curries'
  | 'breads'
  | 'desserts';

export type DietaryType = 'all' | 'non-veg' | 'veg';

export interface Review {
  id: string;
  dishId: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface PairingAddon {
  id: string;
  name: string;
  hindiName?: string;
  price: number;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: MealCategory;
  dietary: 'non-veg' | 'veg';
  price: number;
  description: string;
  story?: string;
  pairing: string;
  badge?: string;
  spiceLevel: 1 | 2 | 3;
  heritageMethod: string;
  tags: string[];
  image?: string;
  serves?: string;
  prepTime?: string;
  estimatedDelivery?: string;
  ingredients?: string[];
  reviewsCount?: number;
  rating?: number;
}

export interface DeliveryOrder {
  id: string;
  dishId: string;
  dishName: string;
  quantity: number;
  spiceLevel: string;
  selectedPairings: string[];
  customerName: string;
  phone: string;
  deliveryAddress: string;
  deliveryArea: string;
  deliveryInstructions?: string;
  subtotal: number;
  deliveryFee: number;
  packagingFee: number;
  total: number;
  estimatedTime: string;
  orderStatus: 'Deg Fired' | 'Clay Sealed' | 'Out for Delivery' | 'Delivered';
  placedAt: string;
}

export interface ReservationData {
  id?: string;
  date: string;
  service: string;
  partySize: string;
  chamber: string;
  guestName: string;
  phone: string;
  specialRequests?: string;
  createdAt?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  colSpanDesktop: string;
}
