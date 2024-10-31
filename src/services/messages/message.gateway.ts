import { WebSocketGateway, SubscribeMessage, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessagesService } from './messages.service';
import { SendMessageDto } from './dto/send-message.dto';

@WebSocketGateway()
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('sendMessage')
  async handleSendMessage(@MessageBody() sendMessageDto: SendMessageDto) {
    // const message = await this.messagesService.create(sendMessageDto);
    // this.server.emit('receiveMessage', message);
  }
}
