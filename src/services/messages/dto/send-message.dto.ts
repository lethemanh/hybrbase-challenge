import { IsString, IsInt } from 'class-validator';

export class SendMessageDto {
  @IsString()
  content: string;

  @IsInt()
  senderId: number;

  @IsInt()
  receiverId: number;

  @IsInt()
  projectId: number;
}
