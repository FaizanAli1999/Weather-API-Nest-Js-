import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class WeatherEntity {

    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    city : string;

    @Column({ type: "decimal", scale: 2 })
    celcius:number

    @Column({ type: "decimal", scale: 2 })
    fahrenheit : number;

    @Column()
    humidity : number

    @Column()
    date : Date;

    @CreateDateColumn() 'created_at': Date;

    @UpdateDateColumn() 'updated_at': Date;

}
