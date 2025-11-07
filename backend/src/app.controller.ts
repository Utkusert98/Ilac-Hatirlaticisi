import { 
  Controller, Get, Post, Patch, Delete, 
  Body, Param, ParseIntPipe, HttpCode, HttpStatus 
} from '@nestjs/common';
import { AppService } from './app.service'; 
import type { IlacDto, IlacDurumDto } from './app.service'; 

@Controller('api')
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Post('ilaclar')
  @HttpCode(HttpStatus.CREATED) 
  create(@Body() ilacDto: IlacDto) {
    return this.appService.createIlac(ilacDto);
  }


  @Get('ilaclar') 
  findAll() {
    return this.appService.findAllIlaclar();
  }

  @Patch('ilaclar/:id')
  updateDurum(
    @Param('id', ParseIntPipe) id: number, 
    @Body() durumDto: IlacDurumDto
  ) {
    return this.appService.updateIlacDurum(id, durumDto);
  }

  @Delete('ilaclar/:id')
  @HttpCode(HttpStatus.NO_CONTENT) 
  delete(
    @Param('id', ParseIntPipe) id: number 
  ) {
    return this.appService.deleteIlac(id);
  }
}