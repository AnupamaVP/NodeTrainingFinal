import { IsNumber, IsString } from "class-validator";

export class CreateProjectDto {
    @IsString()
    public pname: string;
}