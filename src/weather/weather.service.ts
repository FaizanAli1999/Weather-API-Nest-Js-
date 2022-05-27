import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeatherEntity } from './entities/weather.entity';
import axios from 'axios';


@Injectable()
export class WeatherService {

  constructor(private http: HttpService,
    @InjectRepository(WeatherEntity)
    private readonly weatherRepository: Repository<WeatherEntity>,) {
  }

   async create(data:any) {
    const resp =  await axios.get(`http://api.weatherapi.com/v1/current.json?key=8a1fa02c216d40559d2162703222605&q=${data.cityName}`);
    const details = {
      city : resp.data.location.name,
      celcius: resp.data.current.temp_c,
      fahrenheit: resp.data.current.temp_f ,
      humidity: resp.data.current.humidity,
      date : resp.data.location.localtime,
    }
    return await this.weatherRepository.save(details);
  }

  async findAll() {
    const found = await this.weatherRepository.find();
      if(found.length){
       return found;  
     } 
    throw new NotFoundException('Resource Not Found');
  }

  async findOne(id: any) {
    const found = await this.weatherRepository.findOne(id)
    if(found){
      return found;
    }
    throw new NotFoundException('ResourceNot Found');
  }

  async update(id: any, data: any) {
    const found = await this.weatherRepository.findOne(id)
    if(found){
      return await this.weatherRepository.update(id,data);
    }
    throw new NotFoundException('Resource Not Found');
  }

 async remove(id: any) {
    const found = await this.weatherRepository.findOne(id)
    if(found){
      return await this.weatherRepository.delete(id);
    }
    throw new NotFoundException('Resource Not Found');
  }
}
