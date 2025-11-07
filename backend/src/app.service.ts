import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { Ilac } from './ilac.entity';



// 1. GİRDİ REÇETESİ (React'ten gelen)
export interface IlacDto {
  ad: string;
  dozaj: string;
  form: string;
  gunler: string[]; 
  saat: string;
  kullanimSekli: string;
  not: string;
}

// 2. GÜNCELLEME REÇETESİ (React'ten gelen)
export interface IlacDurumDto {
  aktif: boolean;
}

// 3. ÇIKTI REÇETESİ (React'e giden) - YENİ VE ÖNEMLİ
export interface IlacResponseDto {
  id: number;
  ad: string;
  dozaj: string;
  form: string;
  gunler: string[]; 
  saat: string;
  kullanimSekli: string;
  not: string;
  aktif: boolean;
  olusturulmaTarihi: Date;
  guncellenmeTarihi: Date;
}
// ---------------------------------------------

@Injectable()
export class AppService {
  
  constructor(
    @InjectRepository(Ilac)
    private ilacRepository: Repository<Ilac>, 
  ) {}

  private ilacToResponseDto(ilac: Ilac): IlacResponseDto {
    return {
      ...ilac,
      gunler: ilac.gunler ? ilac.gunler.split(',') : [],
    };
  }


  // --- 1. CREATE (Artık KALICI) ---

  async createIlac(ilacDto: IlacDto): Promise<IlacResponseDto> {
    const gunlerString = ilacDto.gunler.join(',');

    const yeniIlac = this.ilacRepository.create({
      ...ilacDto,
      gunler: gunlerString,
    });
    
    const kayitliIlac = await this.ilacRepository.save(yeniIlac);
    

    return this.ilacToResponseDto(kayitliIlac);
  }


  // --- 2. READ (Artık KALICI) ---

  async findAllIlaclar(): Promise<IlacResponseDto[]> {
    const ilaclarFromDb = await this.ilacRepository.find();

    return ilaclarFromDb.map(this.ilacToResponseDto);
  }


  // --- 3. UPDATE (Artık KALICI) ---
  async updateIlacDurum(id: number, durumDto: IlacDurumDto): Promise<IlacResponseDto> {
    const ilac = await this.ilacRepository.findOneBy({ id: id });
    if (!ilac) {
      throw new NotFoundException(`İlaç ID ${id} bulunamadı`);
    }

    ilac.aktif = durumDto.aktif;

    const guncellenenIlac = await this.ilacRepository.save(ilac);
    
    return this.ilacToResponseDto(guncellenenIlac);
  }


  // --- 4. DELETE (Artık KALICI) ---
  async deleteIlac(id: number): Promise<{ mesaj: string }> {
    const result = await this.ilacRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`İlaç ID ${id} bulunamadı`);
    }

    return { mesaj: `İlaç ID ${id} başarıyla silindi` };
  }
}