import { Injectable } from '@nestjs/common';

@Injectable()
export class GameplayService {
  validateMaxAB(key1: number, key2: number, key3: number) {
    const max = key1 > key2 ? key1 : key2;

    if (key3 === max) return true;
    else return false;
  }

  validateUCLNAB(key1: number, key2: number, key3: number) {
    const min = key1 < key2 ? key1 : key2;
    let ucln = 1;

    for (let i = min; i >= 1; i--) {
      if (key1 % i < 0.5 && key2 % i < 0.5) {
        ucln = i;
        break;
      }
    }

    if (key3 === ucln) return true;
    else return false;
  }
}
