import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { RawArticle } from './raw-article.entity';

@Entity()
export class Ticker {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  ticker: string;

  @Column()
  text: string;

  @OneToMany(() => RawArticle, (rawArticle) => rawArticle.id)
  rawArticleRef: RawArticle;

  @CreateDateColumn()
  created_at?: Date;
}
