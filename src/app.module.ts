import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClipsModule } from './clips/clips.module';
import configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
      }),
    }),
    ClipsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
