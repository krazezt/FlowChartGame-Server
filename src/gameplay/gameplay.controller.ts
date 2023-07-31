import { Controller, Post, Body } from '@nestjs/common';
import { GameplayService } from './gameplay.service';
import {
  DTO_ValidateEqualAB,
  DTO_ValidateMaxAB,
  DTO_ValidateUCLNAB,
  RandomLevelDTO,
} from './DTOs';

@Controller('gameplay')
export class GameplayController {
  constructor(private service: GameplayService) {}

  @Post('data/get-random-level')
  getRandomLevel(@Body() dto: any) {
    console.log('Body.except: ' + dto.except);

    return this.service.getRandomLevel(dto.except ? parseInt(dto.except) : -1);
  }

  @Post('validate/max-ab')
  validateMaxAB(@Body() dto: DTO_ValidateMaxAB) {
    return this.service.validateMaxAB(
      parseInt(dto.key1),
      parseInt(dto.key2),
      parseInt(dto.key3),
    );
  }

  @Post('validate/ucln-ab')
  validateUCLNAB(@Body() dto: DTO_ValidateUCLNAB) {
    return this.service.validateUCLNAB(
      parseInt(dto.key1),
      parseInt(dto.key2),
      parseInt(dto.key3),
    );
  }

  @Post('validate/min-ab')
  validateMinAB(@Body() dto: DTO_ValidateMaxAB) {
    return this.service.validateMinAB(
      parseInt(dto.key1),
      parseInt(dto.key2),
      parseInt(dto.key3),
    );
  }

  @Post('validate/equal-ab')
  validateEqualAB(@Body() dto: DTO_ValidateEqualAB) {
    return this.service.validateEqualAB(parseInt(dto.key1), parseInt(dto.key2));
  }
}
