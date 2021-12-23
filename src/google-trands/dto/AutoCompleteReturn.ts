export class AutoCompleteReturn {
  topics: Topic[];
}

export class TrendSearchReturn {
  trendingSearchesDays: Trand[];
  endDateForNextRequest: string;
  rssFeedPageUrl: string;
}

export class InterestOverTimeReturn {
  timelineData: TimeLine[];
  averages: any[];
}

export class InterestByRegionReturn {
  geoMapData: GeoMap[];
}

export class RelatedQueriesReturn {
  rankedList: RankedList[];
  rankedKeyword: RankedKeyword[];
}

export class RealTimeTrendsReturn {
  featuredStoryIds: any[];
  trendingStoryIds: any[];
  storySummaries: storySummary;
  date: Date;
  hideAllImages: boolean;
}

export class RelatedTopicsReturn {
  RelatedList: RelatedList[];
  RelatedKeyword: RelatedKeyword[];
}

export class Topic {
  mid: string;
  title: string;
  type: string;
}

export class Trand {
  date: string;
  formattedDate: string;
  trendingSearches: any[];
}

export class TimeLine {
  time: string;
  formattedTime: string;
  formattedAxisTime: string;
  value: any[];
  formattedValue: any[];
}

export class GeoMap {
  coordinates: coordinate;
  geoName: string;
  value: any[];
  formattedValue: any[];
  maxValueIndex: number;
}

export class coordinate {
  lat: string;
  lng: string;
}

export class RankedList {
  rankedKeyword: RankedKeyword[];
}

export class RankedKeyword {
  topic: Topic;
  value: number;
  formattedValue: string;
  link: string;
}

export class RelatedList {
  RelatedKeyword: RelatedKeyword[];
}

export class RelatedKeyword {
  topic: Topic;
  value: number;
  formattedValue: string;
  link: string;
}

export class storySummary {
  featuredStories: any[];
  trendingStories: any[];
}
