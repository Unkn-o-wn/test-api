import { Module } from '@nestjs/common';
import { SerpstatService } from './serpstat.service';
import { HttpModule } from '@nestjs/axios';
import { SerpstatController } from './serpstat.controller';

@Module({
  providers: [SerpstatService],
  imports: [HttpModule],
  controllers: [SerpstatController],
})
export class SerpstatModule {}
