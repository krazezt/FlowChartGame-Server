import { Injectable } from '@nestjs/common';
import { levelsData } from './data/levels.data';

@Injectable()
export class GameplayService {
  getRandomLevel(except: number) {
    let index: number = this.getRandomInt(0, levelsData.length - 1);
    if (except === -1)
      return levelsData[index]; 
      // return levelsData[8];
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

  validateMaxABC(key1: number, key2: number, key3: number, key4: number) {
    const max =
      key1 > key2 ? (key1 > key3 ? key1 : key3) : key2 > key3 ? key2 : key3;

    if (key4 === max) return true;
    else return false;
  }

  validateMinABC(key1: number, key2: number, key3: number, key4: number) {
    const min =
      key1 < key2 ? (key1 < key3 ? key1 : key3) : key2 < key3 ? key2 : key3;

    if (key4 === min) return true;
    else return false;
  }

  validateMinAB(key1: number, key2: number, key3: number) {
    const min = key1 < key2 ? key1 : key2;

    if (key3 === min) return true;
    else return false;
  }

  validateEqualAB(key1: number, key2: number) {
    return key1 === key2;
  }

  validateFibonacci(key1: number, key2: number) {
    let x1: number = 0,
      x2: number = 1,
      y: number = 1;
    while (y <= key1) {
      y = x1 + x2;
      x1 = x2;
      x2 = y;
    }

    console.log({ key1, key2, y });

    return Math.round(y) === key2;
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

  validateBCNNAB(key1: number, key2: number, key3: number) {
    const min = key1 < key2 ? key1 : key2;
    let ucln = 1;

    for (let i = min; i >= 1; i--) {
      if (key1 % i < 0.5 && key2 % i < 0.5) {
        ucln = i;
        break;
      }
    }
    let bcnn = Math.round((key1 * key2) / ucln);

    if (key3 === bcnn) return true;
    else return false;
  }

  getRandomInt(min: number, max: number) {
    return min + Math.floor(Math.random() * (max + 1));
  }
}
