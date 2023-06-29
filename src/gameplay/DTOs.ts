import { IsNotEmpty, IsString } from 'class-validator';

class DTO_ValidateMaxAB {
  @IsNotEmpty()
  @IsString()
  key1: string;

  @IsNotEmpty()
  @IsString()
  key2: string;

  @IsNotEmpty()
  @IsString()
  key3: string;
}

class DTO_ValidateUCLNAB {
  @IsNotEmpty()
  @IsString()
  key1: string;

  @IsNotEmpty()
  @IsString()
  key2: string;

  @IsNotEmpty()
  @IsString()
  key3: string;
}

export { DTO_ValidateMaxAB, DTO_ValidateUCLNAB };
