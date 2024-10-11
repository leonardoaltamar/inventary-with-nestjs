import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: `Create task`})
  @ApiResponse({ status: 201, description: 'Product was created', type: Product })
  @ApiResponse({ status: 400, description: 'Bad request' })  
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  
  @Get()
  @ApiOperation({ summary: `Get All tasks`})
  @ApiResponse({ status: 200, description: 'Return all tasks' })
  @ApiResponse({ status: 404, description: 'Return Not found exception' })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: `Get task by id`})
  @ApiResponse({ status: 200, description: 'Return one task' })
  @ApiResponse({ status: 404, description: 'Return Not found exception' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Update task by id`})
  @ApiResponse({ status: 201, description: 'Return task updated', type: Product })
  @ApiResponse({ status: 404, description: 'Return Not found exception' })
  @ApiResponse({ status: 400, description: 'Bad request' })  
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: `Delete task by id`})
  @ApiResponse({ status: 200, description: 'Return task deleted' })
  @ApiResponse({ status: 404, description: 'Return Not found exception' })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
