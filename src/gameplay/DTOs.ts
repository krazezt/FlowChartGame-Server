import { IsNotEmpty, IsNumber } from 'class-validator';

class DTO_ValidateMaxAB {
  @IsNotEmpty()
  @IsNumber()
  key1: number;

  @IsNotEmpty()
  @IsNumber()
  key2: number;

  @IsNotEmpty()
  @IsNumber()
  key3: number;
}

export { DTO_ValidateMaxAB };
