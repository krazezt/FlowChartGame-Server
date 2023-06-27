import { Injectable } from '@nestjs/common';
import { DTO_ValidateMaxAB } from './DTOs';

@Injectable()
export class GameplayService {
  validateMaxAB(key1: number, key2: number, key3: number) {
    const max = key1 > key2 ? key1 : key2;

    if (key3 === max) return true;
    else return false;
  }
}
