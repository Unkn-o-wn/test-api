import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
export class SerpstatService {
  constructor(private readonly httpService: HttpService) {}

  async test(): Promise<any> {
    const conf = JSON.stringify({
      id: 1,
      method: 'SerpstatLimitsProcedure.getStats',
    });
    try {
      const test = this.httpService.post(
        'https://api.serpstat.com/v4/?token=59fa9c206badb8f40240685b102d502f',
        conf,
      );
      const test2 = await lastValueFrom(test);
      console.log(test);
      console.log(test2);

      return true;
    } catch (e) {
      Logger.error(e);
    }
  }
}
