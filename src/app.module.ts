import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterController } from './character/character.controller';
import { CharacterModule } from './character/character.module';
import { CharacterService } from './character/character.service';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION_URI), CharacterModule],
  controllers: [AppController, CharacterController],
  providers: [AppService, CharacterService],
})
export class AppModule {}
