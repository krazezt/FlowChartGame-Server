import { Controller, Post, Body } from '@nestjs/common';
import { GameplayService } from './gameplay.service';
import { DTO_ValidateMaxAB } from './DTOs';

@Controller('gameplay')
export class GameplayController {
  constructor(private service: GameplayService) {}

  @Post('validate/max-ab')
  validateMaxAB(@Body() dto: DTO_ValidateMaxAB) {
    return this.service.validateMaxAB(
      parseInt(dto.key1),
      parseInt(dto.key2),
      parseInt(dto.key3),
    );
  }
}
