import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
 async create(@Body() data: CreateWeatherDto) {
    return await this.weatherService.create(data);
  }

  @Get()
  async findAll() {
    return await this.weatherService.findAll();
  }

  @Get(':id')
  async findOne(@Param() id:any) {
    return await this.weatherService.findOne(id);
  }

  @Put(':id')
 async update(@Param() id: any, @Body() data: any) {
    return await this.weatherService.update(id, data);
  }

  @Delete(':id')
  remove(@Param() id: any) {
    return this.weatherService.remove(id);
  }
}
