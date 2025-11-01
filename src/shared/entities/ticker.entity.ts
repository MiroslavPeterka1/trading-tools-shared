import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToMany } from 'typeorm';
import { Article } from './article.entity';

@Entity()
export class Ticker {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  ticker: string;

  @Column()
  text: string;

  @ManyToMany(() => Article, (article) => article.id)
  articleRef?: Article[];

  @CreateDateColumn()
  created_at?: Date;
}
