import { Controller, Post } from '@nestjs/common';
import { SerpstatService } from './serpstat.service';

@Controller('serpstat')
export class SerpstatController {
  constructor(private readonly serpstatService: SerpstatService) {}
  @Post()
  async test() {
    return this.serpstatService.test();
  }
}
