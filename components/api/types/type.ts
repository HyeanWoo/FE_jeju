enum OttType {
  NETFLIX = "NETFLIX",
  TVING = "TVING",
  WAVVE = "WAVVE",
  COUPANG = "COUPANG",
  DISNEY = "DISNEY",
  WATCHA = "WATCHA",
}

type Image = {
  createDate: Date;
  updateDate: Date;
  id: number;
  imageUrl: string;
  originImageName: string;
  imageName: string;
  representImageYn: string;
};

export type Summary = {
  createDate: Date;
  updateDate: Date;
  id: number;
  title: string;
  description: string;
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
  summaryId: number;
};

export type SummaryResponse = {
  summary: Summary;
};

export type ContentsResponse = {
  contents: Content[];
};
