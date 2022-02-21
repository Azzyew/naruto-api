import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CharactersService } from './characters.service';
import { Character } from './schema/character.schema';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @ApiOkResponse({ type: Character, isArray: true })
  @Get()
  getAll() {
    return this.charactersService.getAll();
  }

  @ApiOkResponse({ type: Character, isArray: false })
  @Get('id/:id')
  getOneById(@Param('id') id: string) {
    return this.charactersService.getOneById(id);
  }

  @ApiOkResponse({ type: Character, isArray: true })
  @Get('name/:name')
  getByName(@Param('name') name: string) {
    return this.charactersService.getByName(name);
  }
}
