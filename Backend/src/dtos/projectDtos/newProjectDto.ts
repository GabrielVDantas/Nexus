import { IsNotEmpty, IsNumber, IsString, MinLength, Min } from "class-validator";

class NewProjectDTO {
  @IsString()
  @IsNotEmpty({ message: "O campo 'nome' é obrigatório" })
  @MinLength(10)
  name: string;

  @IsString()
  @IsNotEmpty({ message: "O campo 'descrição' é obrigatório" })
  description: string;

  @IsNumber()
  @IsNotEmpty({ message: "O campo 'meta financeira' é obrigatório" })
  @Min(1, { message: "O valor mínimo deve ser 1." })
  goal: number;

  @IsNotEmpty({ message: "O campo 'arte de apresentação' é obrigatório" })
  coverArt: Buffer;

  @IsNotEmpty()
  screenshots: Buffer[];

  @IsNotEmpty({ message: "O campo 'categorias' é obrigatório" })
  categories: string[];
}

export default NewProjectDTO;
