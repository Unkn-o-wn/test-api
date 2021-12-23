import { Injectable } from '@nestjs/common';
import * as googleTrends from 'google-trends-api';
import { dtoKeyword } from './dto/dtoKeyword';
import {
  AutoCompleteReturn,
  InterestByRegionReturn,
  InterestOverTimeReturn,
  RealTimeTrendsReturn,
  RelatedQueriesReturn, RelatedTopicsReturn,
  TrendSearchReturn
} from "./dto/AutoCompleteReturn";
import {
  optionsInterestByRegion,
  optionsInterestOverTime,
  optionsObjectAutoComplete,
  optionsObjectDailyTrends,
  optionsRealTimeTrends,
  optionsRelatedQueries, optionsRelatedTopics
} from "./dto/optionsObject-type";

@Injectable()
export class GoogleTrandsService {
  async getReports(keyword: dtoKeyword) {
    return JSON.parse(
      await googleTrends.autoComplete({
        keyword,
      }),
    ).default;
  }

  async getAutoComplete(
    optionsObject: optionsObjectAutoComplete,
  ): Promise<AutoCompleteReturn> {
    return JSON.parse(
      await googleTrends.autoComplete({
        ...optionsObject,
      }),
    ).default;
  }

  async getDailyTrends(
    optionsObject: optionsObjectDailyTrends,
  ): Promise<TrendSearchReturn> {
    return JSON.parse(
      await googleTrends.autoComplete({
        ...optionsObject,
      }),
    ).default;
  }

  async getInterestOverTime(
    optionsObject: optionsInterestOverTime,
  ): Promise<InterestOverTimeReturn> {
    return JSON.parse(
      await googleTrends.autoComplete({
        ...optionsObject,
      }),
    ).default;
  }

  async getInterestByRegion(
    optionsObject: optionsInterestByRegion,
  ): Promise<InterestByRegionReturn> {
    return JSON.parse(
      await googleTrends.autoComplete({
        ...optionsObject,
      }),
    ).default;
  }

  async getRealTimeTrends(
    optionsObject: optionsRealTimeTrends,
  ): Promise<RealTimeTrendsReturn> {
    return JSON.parse(
      await googleTrends.autoComplete({
        ...optionsObject,
      }),
    ).default;
  }

  async getRelatedQueries(
    optionsObject: optionsRelatedQueries,
  ): Promise<RelatedQueriesReturn> {
    return JSON.parse(
      await googleTrends.autoComplete({
        ...optionsObject,
      }),
    ).default;
  }

  async getRelatedTopics(
    optionsObject: optionsRelatedTopics,
  ): Promise<RelatedTopicsReturn> {
    return JSON.parse(
      await googleTrends.autoComplete({
        ...optionsObject,
      }),
    ).default;
  }
}
