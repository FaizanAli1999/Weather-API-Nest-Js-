import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherEntity } from './entities/weather.entity';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports : [TypeOrmModule.forFeature([WeatherEntity]),
  HttpModule.registerAsync({
    useFactory: () => ({
      timeout: 90000000,
      maxRedirects: 5,
    }),
  })],
  controllers: [WeatherController],
  providers: [WeatherService]
})
export class WeatherModule {}
