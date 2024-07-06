import { NestFactory } from '@nestjs/core';
import { SeederService } from './seeder/seeder.service';
import { DatabaseModule } from './database.module';

async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule);
  const seederService = app.get(SeederService);

  const [action, collectionName] = process.argv.slice(2);

  if (!collectionName) throw new Error('Please provide a collection name.');

  switch (action) {
    case 'seed':
      await seederService.seed(collectionName);
      break;
    case 'drop':
      await seederService.drop(collectionName);
      break;
    case 'reset':
      await seederService.reset(collectionName);
      break;
    default:
      throw new Error('Invalid action argument.');
  }
  await app.close();
}

void bootstrap();
