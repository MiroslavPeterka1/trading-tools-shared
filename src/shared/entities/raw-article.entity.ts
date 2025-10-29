import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { ScrapedArticle } from './scraped-article.entity';
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
  source: string;

  @Column()
  type: string;

  @OneToOne(() => ScrapedArticle, (scrapedArticle) => scrapedArticle.id)
  scrapedArticle?: ScrapedArticle;

  @ManyToOne(() => Ticker, (ticker) => ticker.id)
  tickersRef: Ticker[];

  @CreateDateColumn()
  created_at?: Date;
}
