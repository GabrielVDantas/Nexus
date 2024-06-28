import { IsNumber, IsString, Min } from "class-validator";

class UpdateProjectDTO {
    @IsString()
    description: string;
  
    @IsNumber()
    @Min(1, { message: "O valor mínimo deve ser 1." })
    goal: number;
  
    categories: string[];
}

export default UpdateProjectDTO;