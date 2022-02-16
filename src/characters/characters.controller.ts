import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CharactersService } from './characters.service';
import { Character } from './entities/character.entity';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @ApiOkResponse({ type: Character, isArray: true })
  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @ApiOkResponse({ type: Character, isArray: false })
  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.charactersService.findOne(id);
  }

  @ApiOkResponse({ type: Character, isArray: true })
  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.charactersService.findByName(name);
  }
}
