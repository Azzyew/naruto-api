import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './entities/character.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema, collection: 'characters' }])],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule {}