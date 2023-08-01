import { IsNotEmpty, IsString } from 'class-validator';

class DTO_ValidateMaxMinAB {
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

class DTO_ValidateMaxMinABC {
  @IsNotEmpty()
  @IsString()
  key1: string;

  @IsNotEmpty()
  @IsString()
  key2: string;

  @IsNotEmpty()
  @IsString()
  key3: string;

  @IsNotEmpty()
  @IsString()
  key4: string;
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

class DTO_ValidateEqualAB {
  @IsNotEmpty()
  @IsString()
  key1: string;

  @IsNotEmpty()
  @IsString()
  key2: string;
}

class RandomLevelDTO {
  except: string;
}

export {
  DTO_ValidateMaxMinAB,
  DTO_ValidateMaxMinABC,
  DTO_ValidateUCLNAB,
  RandomLevelDTO,
  DTO_ValidateEqualAB,
};
