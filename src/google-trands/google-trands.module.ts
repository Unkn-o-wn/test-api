import { Module } from '@nestjs/common';
import { GoogleTrandsService } from './google-trands.service';
import { GoogleTrandsController } from './google-trands.controller';

@Module({
  providers: [GoogleTrandsService],
  controllers: [GoogleTrandsController],
})
export class GoogleTrandsModule {}
