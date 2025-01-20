import { Module } from '@nestjs/common';
import { Bcrypt } from './bcrypt/bcrypt';

@Module({
  imports: [],
  controllers: [],
  providers: [Bcrypt], // Classe de Serviço
  exports: [Bcrypt], // Disponível para outros recursos
})
export class AuthModule {}
