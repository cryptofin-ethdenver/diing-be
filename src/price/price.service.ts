import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PriceService {
  private cache: any;
  private last: number;

  async fetchPrice() {
    const now = Date.now();
    if (this.last <= now - 60000 || !this.cache) {
      const coinList = 'ethereum,usd-coin,tether,matic-network';
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinList}&vs_currencies=usd`,
      );
      this.cache = res.data;
      this.last = now;
    }
    return this.cache;
  }
}
