import { IsString } from "class-validator";

export class CreateClassDto {
  @IsString() name!: string;
  @IsString() section!: string;
}

export class EnrollDto {
  @IsString() studentId!: string;
}
