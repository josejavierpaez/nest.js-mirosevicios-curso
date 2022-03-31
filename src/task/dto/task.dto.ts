import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
