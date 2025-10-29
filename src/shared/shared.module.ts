import { Module } from '@nestjs/common';
import { LogService } from './services/log/log.service';

@Module({
  providers: [LogService],
  exports: [LogService],
})
export class SharedModule {}
