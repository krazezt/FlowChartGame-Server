import { Injectable } from '@nestjs/common';
import { DTO_ValidateMaxAB } from './DTOs';

@Injectable()
export class GameplayService {
  validateMaxAB(dto: DTO_ValidateMaxAB) {
    const max = dto.key1 > dto.key2 ? dto.key1 : dto.key2;

    if (dto.key3 === max) return true;
    else return false;
  }
}
