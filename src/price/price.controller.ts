import { Controller, Get } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get()
  async getPrice() {
    return this.priceService.fetchPrice();
  }
}
