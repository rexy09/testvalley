export interface BannerData {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ShortutData {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}



export interface Publication {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface: string | null;
  prefaceIconUrl: string | null;
  productName: string;
  brandName: string;
  media: {
    seq: number;
    type: string;
    uri: string;
    mimeType: string;
    deviceType: string | null;
  }[];
  isTrial: boolean;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  priceInfo: {
    price: number;
    discountPrice?: number;
    discountRate?: number;
    couponDiscountPrice?: number;
    couponDiscountRate?: number;
  };
  discounts: {
    id: number;
    name: string | null;
    type: string;
    calcMethod: string;
    value: number;
    activeFrom: string | null;
    activeTo: string | null;
    qty: number;
    remain: number | null;
  }[];
  applyCoupon: boolean;
}

export interface PublicationItem {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  uuid: string;
  name: string;
  body: string | null;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: string | null;
  publication: Publication;
  prdType: number;
}

export interface CollectionData {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: null;
  installmentPrice: null;
  installmentPeriod: null;
  rating: number;
  startDate: null;
  endDate: null;
  viewType: string;
  createdAt: string;
  items: PublicationItem[];
  media: any[];
  taggings: any[];
  singleCollections: any[];
}
