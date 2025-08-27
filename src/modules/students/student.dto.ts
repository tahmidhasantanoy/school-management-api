import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class CreateStudentDto {
  @IsString() name!: string; /* ! = will not be null or undefined */
  @IsInt() @Min(1) age!: number;
  @IsOptional() @IsString() classId?: string;
}
