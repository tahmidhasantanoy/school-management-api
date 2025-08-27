import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

// Those are ensure the properties type with those schemas
export class SignupDto {
  @IsString() name!: string;
  @IsEmail() email!: string;
  @MinLength(6) password!: string;
  @IsEnum(['admin','teacher','student'] as any) role!: 'admin'|'teacher'|'student';
}

export class LoginDto {
  @IsEmail() email!: string;
  @MinLength(6) password!: string;
}

export class RefreshDto {
  @IsString() token!: string;
}
