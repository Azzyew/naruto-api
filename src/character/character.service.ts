import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Character, CharacterDocument } from "./schema/character.schema";

@Injectable()
export class CharacterService{
  constructor(@InjectModel('characters') private readonly characterModel: Model<CharacterDocument>) {}

  async fetchAll(){
    return await this.characterModel.find().exec();
  }
}