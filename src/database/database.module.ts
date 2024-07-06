import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SeederModule } from './seeder/seeder.module';
import configuration from '../config/configuration';

@Module({
  imports: [
    SeederModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database_uri'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
