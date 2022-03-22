import { Injectable } from '@nestjs/common';
import { CharactersRepository } from './characters.repository';

@Injectable()
export class CharactersService {
  constructor(private readonly characterRepository: CharactersRepository) {}

  getAll() {
    return this.characterRepository.findAll();
  }

  getOneById(id: string) {
    return this.characterRepository.findOneById(id);
  }

  getByName(name: string) {
    return this.characterRepository.findByName(name);
  }
}
