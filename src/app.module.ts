import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleTrandsModule } from './google-trands/google-trands.module';
import { SerpstatModule } from './serpstat/serpstat.module';

@Module({
  imports: [GoogleTrandsModule, SerpstatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
