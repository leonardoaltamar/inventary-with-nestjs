import { Transform } from "class-transformer"
import { IsDate, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    nombre:string

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @IsPositive()
    precio:number

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    cantidad:number    

    @IsString()
    @IsOptional()
    descripcion?:string

    
    fecha_creacion:Date

    
    fecha_actualizacion:Date
}
