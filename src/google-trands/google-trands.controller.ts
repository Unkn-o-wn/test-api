import { Body, Controller, Get, Post } from '@nestjs/common';
import { GoogleTrandsService } from './google-trands.service';
import { dtoKeyword } from './dto/dtoKeyword';

@Controller('google-trands')
export class GoogleTrandsController {
  constructor(private readonly googleTrandsService: GoogleTrandsService) {}

  @Get('reports')
  async getReports(@Body('keyword') keyword: dtoKeyword) {
    return await this.googleTrandsService.getReports(keyword);
  }
}
