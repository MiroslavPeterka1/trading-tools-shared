import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, CreateDateColumn, ManyToMany } from 'typeorm';
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

  @CreateDateColumn()
  created_at?: Date;
}
