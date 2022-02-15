import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character, CharacterDocument } from './entities/character.entity';

@Injectable()
export class CharactersService {

  constructor(@InjectModel(Character.name) private characterModel: Model<CharacterDocument>) {}

  findAll() {
    return this.characterModel.find();
  }

  findOne(id: string) {
    return this.characterModel.findById(id);
  }

  findByName(name: string) {
    //Setting first letter of Name to be upper case for correct filtering in the database
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    return this.characterModel.find({ 'name': { $regex: formattedName } });
  }
}
