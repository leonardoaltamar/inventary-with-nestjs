import { Transform } from "class-transformer"
import { IsDate, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator"

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
    @IsNotEmpty()
    @Min(0)
    cantidad:number    

    @IsString()
    @IsOptional()
    descripcion?:string

    
    fecha_creacion:Date

    
    fecha_actualizacion:Date
}
