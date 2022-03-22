import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharactersModule } from './characters/characters.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION_URI),
    CharactersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
