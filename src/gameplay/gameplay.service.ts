import { Injectable } from '@nestjs/common';
import { levelsData } from './data/levels.data';

@Injectable()
export class GameplayService {
  getRandomLevel(except: number) {
    let index: number = this.getRandomInt(0, levelsData.length - 1);
    if (except === -1) return levelsData[index];
    else
      while (index === except) {
        index = this.getRandomInt(0, levelsData.length - 1);
      }

    return levelsData[index];
  }

  validateMaxAB(key1: number, key2: number, key3: number) {
    const max = key1 > key2 ? key1 : key2;

    if (key3 === max) return true;
    else return false;
  }

  validateMinAB(key1: number, key2: number, key3: number) {
    const min = key1 < key2 ? key1 : key2;

    if (key3 === min) return true;
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

  getRandomInt(min: number, max: number) {
    return min + Math.floor(Math.random() * (max + 1));
  }
}
