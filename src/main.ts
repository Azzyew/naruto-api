import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule } from 'nestjs-redoc';
import { AppModule } from './app.module';
import { redocOptions } from './utils/redoc-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Naruto API')
    .setDescription(
      `Simple Naruto API to get the characters' data. The database was populated by a web scraper. I'll upload more information about the characters but it will take some time so bear with me. I will also make a jutsu collection in the future so stay tuned for that! Link for the GitHub repository: https://github.com/Azzyew/naruto-api`,
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  await RedocModule.setup('/', app, document, redocOptions);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
