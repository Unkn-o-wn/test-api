export abstract class optionsObject {
  keyword: string | string[];
  startTime?: Date;
  endTime?: Date;
  geo?: string | string[];
  hl?: string;
  timezone?: number;
  category?: number;
  property?: propertyEnum;
  resolution?: resolutionEnum;
  granularTimeResolution?: boolean;
}

export class optionsObjectAutoComplete {
  keyword: string | string[];
  hl?: string;
}

export class optionsObjectDailyTrends {
  geo: string | string[];
  hl?: string;
  timezone?: number;
  trendDate?: Date;
}

export class optionsInterestOverTime {
  keyword: string | string[];
  startTime?: Date;
  endTime?: Date;
  geo?: string | string[];
  hl?: string;
  category?: number;
  granularTimeResolution?: boolean;
}

export class optionsInterestByRegion {
  keyword: string | string[];
  startTime?: Date;
  endTime?: Date;
  geo?: string | string[];
  hl?: string;
  category?: number;
  resolution?: resolutionEnum;
  timezone?: number;
}

export class optionsRelatedQueries {
  keyword: string | string[];
  startTime?: Date;
  endTime?: Date;
  geo?: string | string[];
  hl?: string;
  timezone?: number;
  category?: number;
}

export class optionsRealTimeTrends {
  geo: string | string[];
  hl?: string;
  timezone?: number;
  category?: number;
}

export class optionsRelatedTopics {
  keyword: string | string[];
  startTime?: Date;
  endTime?: Date;
  geo?: string | string[];
  hl?: string;
  timezone?: number;
  category?: number;
}

enum propertyEnum {
  images = 'images',
  news = 'news',
  youtube = 'youtube',
  froogle = 'froogle',
}
enum resolutionEnum {
  COUNTRY = 'COUNTRY',
  REGION = 'REGION',
  CITY = 'CITY',
  DMA = 'DMA',
}
