import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { RawArticle } from './raw-article.entity';
import { ScrapedArticle } from './scraped-article.entity';

@Entity()
export class Ticker {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  ticker: string;

  @Column()
  text: string;

  @OneToMany(() => RawArticle, (rawArticle) => rawArticle.id)
  rawArticleRef?: RawArticle[];

  @OneToMany(() => ScrapedArticle, (scrapedArticle) => scrapedArticle.id)
  scrapedArticles?: ScrapedArticle[];

  @CreateDateColumn()
  created_at?: Date;
}
