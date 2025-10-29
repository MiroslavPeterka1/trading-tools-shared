import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class NewsListDto {
  @IsArray()
  @IsNotEmpty()
  body: NewsItemDto[];
}

export class NewsItemDto {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  img: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  source: string;

  @IsString()
  @IsString()
  type: 'Article' | 'Video';

  @IsArray()
  @IsNotEmpty()
  tickers: string[];

  @IsString()
  @IsNotEmpty()
  time: number;

  @IsString()
  @IsNotEmpty()
  ago: string;
}
