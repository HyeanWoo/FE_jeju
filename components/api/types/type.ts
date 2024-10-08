enum OttType {
  NETFLIX = "NETFLIX",
  TVING = "TVING",
  WAVVE = "WAVVE",
  COUPANG = "COUPANG",
  DISNEY = "DISNEY",
  WATCHA = "WATCHA",
}

export type Image = {
  createDate: Date;
  updateDate: Date;
  id: number;
  imageUrl: string;
  originImageName: string;
  imageName: string;
  representImageYn: "Y" | "N";
};

export type Summary = {
  createDate: Date;
  updateDate: Date;
  id: number;
  title: string;
  description: string;
  tags: string;
  ottType: OttType;
  image: Image;
  contents: Content[];
};

export type Content = {
  createDate: Date;
  updateDate: Date;
  id: number;
  title: string;
  description: string;
  category: string;
  phone: string;
  address: string;
  latitude: string;
  longitude: string;
  summaryId: number;
  imageList: Image[];
};

export type SummaryResponse = {
  summary: Summary;
};

export type ContentWithCertified = {
  content: Content;
  isCertified: boolean;
};

export type ContentsResponse = {
  contents: ContentWithCertified[];
};

export type Position = {
  lat: number;
  lng: number;
};

export type TourContent = {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  cpyrhtDivCd: string;
  createdtime: string;
  dist: string;
  firstimage: string;
  firstimage2: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
};
export interface KakaoTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export interface KakaoUserInfo {
  id: number;
}

export interface UserResponse {
  createDate: string;
  updateDate: string;
  id: number;
  email: string;
  nickname: string;
}

export interface TourFinish {
  createDate: string;
  updateDate: string;
  id: number;
  title: string;
  description: string;
  ottType: string;
  tags: string;
  image: Image;
}

export interface ContentFinish {
  createDate: string;
  updateDate: string;
  id: number;
  title: string;
  description: string;
  category: string;
  phone: string;
  address: string;
  latitude: string;
  longitude: string;
  summary: Summary;
  imageList: Image[];
}

export type CertifyResponse = {
  isLast: boolean;
};

type TourSummary = {
  summary: Summary;
  certifiedContent: number;
  totalContent: number;
};

export type TourListResponse = TourSummary[];
export type TourImageListResponse = Image[];
