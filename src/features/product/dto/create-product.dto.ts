import { IsDecimal, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator"

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    nombre:string

    @IsDecimal()
    @IsNotEmpty()
    @IsPositive()
    precio:number

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    cantidad:number    

    @IsString()
    descripcion?:string
}
