import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Ticker } from './ticker.entity';

@Entity()
export class RawArticle {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url: string;

  @Column()
  img: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  scrapedText?: string;

  @Column()
  source: string;

  @Column()
  type: string;

  @ManyToMany(() => Ticker, (ticker) => ticker.id)
  @JoinTable()
  tickersRef?: Ticker[];

  @CreateDateColumn()
  created_at?: Date;
}
