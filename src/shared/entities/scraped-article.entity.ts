import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, CreateDateColumn } from 'typeorm';
import { RawArticle } from './raw-article.entity';
import { Ticker } from './ticker.entity';

@Entity()
export class ScrapedArticle {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @OneToOne(() => RawArticle, (rawArticle) => rawArticle.id)
  rawArticleRef?: RawArticle;

  @ManyToOne(() => Ticker, (ticker) => ticker.id)
  tickersRef?: Ticker[];

  @CreateDateColumn()
  created_at?: Date;
}
