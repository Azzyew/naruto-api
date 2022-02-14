import { Controller, Get } from "@nestjs/common";
import { CharacterService } from "./character.service";

@Controller('characters')
export class CharacterController {
  constructor(private service: CharacterService) {}
  
  @Get('/')
  async fetchAll() {
    return await this.service.fetchAll();
  }
}
