import { NestFactory } from '@nestjs/core';
import { PokedexApiModule } from './pokedex-api.module';

async function bootstrap() {
  const app = await NestFactory.create(PokedexApiModule);
  app.enableCors({
    origin: '*', // Allow requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });
  // app.setGlobalPrefix('api');
  await app.listen(3000, function () {
    console.log("Server Started");
  });
}

bootstrap();
