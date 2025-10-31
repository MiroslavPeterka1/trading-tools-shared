import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
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
  @JoinTable()
  scrapedArticle?: ScrapedArticle;

  @ManyToMany(() => Ticker, (ticker) => ticker.id)
  @JoinTable()
  tickersRef?: Ticker[];

  @CreateDateColumn()
  created_at?: Date;
}
