import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsDate, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator"

export class CreateProductDto {

    @ApiProperty({
        description: 'Product name (unique)',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    nombre:string

    @ApiProperty()
    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @IsPositive()
    precio:number

    @ApiProperty()
    @IsInt()    
    @IsNotEmpty()
    @Min(0)
    cantidad:number    

    @ApiProperty()
    @IsString()
    @IsOptional()
    descripcion?:string


    fecha_creacion:Date

    fecha_actualizacion:Date
}
