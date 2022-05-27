import {IsNotEmpty} from 'class-validator';

export class CreateWeatherDto {

    @IsNotEmpty()
    cityName : string;
}
