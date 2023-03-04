import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PriceService {
  async fetchPrice() {
    const coinList = 'ethereum,usd-coin,tether,matic-network';
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinList}&vs_currencies=usd`,
    );
    return res.data;
  }
}
