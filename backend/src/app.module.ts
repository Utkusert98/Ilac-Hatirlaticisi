// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Ilac } from './ilac.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      
      database: 'ilaclar.sqlite.db', 
      

      entities: [Ilac],
      

      synchronize: true, 
    }),
    
    TypeOrmModule.forFeature([Ilac]),
  ],

  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}