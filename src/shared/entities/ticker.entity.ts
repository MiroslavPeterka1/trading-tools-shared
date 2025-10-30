import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToMany } from 'typeorm';
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

  @ManyToMany(() => RawArticle, (rawArticle) => rawArticle.id)
  rawArticleRef?: RawArticle[];

  @CreateDateColumn()
  created_at?: Date;
}
