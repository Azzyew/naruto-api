import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CharacterDocument = Character & Document;

@Schema()
export class Character {

  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  fullName: string;

  @ApiProperty()
  @Prop()
  img: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);