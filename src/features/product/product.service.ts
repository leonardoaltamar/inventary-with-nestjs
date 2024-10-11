import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  private readonly logger  = new Logger('ProductService');

  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>
  ){ }

  async create(createProductDto: CreateProductDto) {
    try {

      createProductDto.fecha_actualizacion = new Date();
      createProductDto.fecha_creacion = new Date();
      
      const product = this.productRepository.create(createProductDto);

      await this.productRepository.save( product )

      return product;
      
    } catch (error) {      
      this.handleDBExceptions(error)
    }
  }

  async findAll() {

    const products = await this.productRepository.find()

    if(!products){
      throw new NotFoundException(`Table product is empty`)
    }


    return this.productRepository.find();
  }

  async findOne(id: number) {

    const productById = await this.productRepository.findBy({id: id})

    if(!productById){
      throw new NotFoundException(`The product with id ${id} not found`)
    }

    return productById;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {

    updateProductDto.fecha_actualizacion = new Date();
    
    const product = await this.productRepository.preload({
      id:id,
      ...updateProductDto
    });

    if( !product ) throw new NotFoundException(`Product with id ${id} not found`);

    try {
      
      await this.productRepository.save( product )
      return product;
      
    } catch (error) {
      this.handleDBExceptions(error)
    }

  }

  async remove(id: number) {

    const product = await this.findOne(id)

    return await this.productRepository.remove(product)

  }

  private handleDBExceptions( error: any ){
    if(error.code == '23505') throw new BadRequestException(error.detail);

    this.logger.error(error)

    throw new InternalServerErrorException('Unexpected error, check server logs to more information')
  }

}
