import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CharacterDocument = Character & Document;

@Schema()
export class Character {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  fullName: string;

  @Prop()
  img: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);