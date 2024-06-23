import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

class UpdateUserDTO {
  @IsString()
  @MaxLength(50)
  @IsOptional()
  username: string;

  @MinLength(4)
  @IsOptional()
  password: string;
  
  @IsOptional()
  photo: Buffer;

  @IsString()
  @MaxLength(500)
  @IsOptional()
  description: string;
}

export default UpdateUserDTO;
