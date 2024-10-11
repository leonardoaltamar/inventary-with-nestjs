import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @ApiProperty({
        example: 1,
        description: 'Id is unique and autoincrement',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('increment')
    id:number;

    @ApiProperty({
        example: 'Door',
        description: 'this is the product`s name, is unique',
        uniqueItems: true,
    })
    @Column('text', {
        unique: true,
        nullable: false
    })
    nombre:string;

    @ApiProperty(
        {
            example: 'The product is great because...',
            description: 'this is the product`s description, is optional',
            uniqueItems: false,
            nullable: false
        }
    )
    @Column('text', {
        nullable: true
    })
    descripcion?: string

    @ApiProperty(
        {
            example: 2300.12,
            description: 'this is the product`s price, is obligatory and can`t have more 2 decimal',
            uniqueItems: false
        }
    )
    @Column('float', {
        nullable: false
    })
    precio:number

    @ApiProperty(
        {
            example: 23,
            description: 'this is the product`s count, is obligatory',
            uniqueItems: false
        }
    )
    @Column('int', {
        nullable: false
    })
    cantidad:number

    @ApiProperty(
        {
            example: '2024-10-10 20:39:35.153',
            description: 'Control data, catch the moment when the product was created',
            uniqueItems: false
        }
    )
    @Column('timestamp', {
        nullable: false
    })
    fecha_creacion:Date


    @ApiProperty(
        {
            example: '2024-10-10 20:39:35.153',
            description: 'Control data, catch the moment when the product was updated',
            uniqueItems: false
        }
    )
    @Column('timestamp', {
        nullable: false
    })    
    fecha_actualizacion:Date

}
