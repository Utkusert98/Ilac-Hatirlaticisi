
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn 
} from 'typeorm';


@Entity('ilac')
export class Ilac {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ad: string;

  @Column()
  dozaj: string;

  @Column()
  form: string;

  @Column()
  gunler: string;

  @Column()
  saat: string;

  @Column()
  kullanimSekli: string;

  @Column({ nullable: true })
  not: string;

  @Column({ default: true })
  aktif: boolean;

  @CreateDateColumn()
  olusturulmaTarihi: Date;

  @UpdateDateColumn()
  guncellenmeTarihi: Date;
}