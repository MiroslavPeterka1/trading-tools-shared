import { Injectable, Logger } from '@nestjs/common';

type LogLevel = 'zero' | 'info' | 'debug';

@Injectable()
export class LogService {
  private logLevel: LogLevel = 'debug';

  constructor() {
    this.logLevel = process.env.LOG_LEVEL as LogLevel;
  }

  public log(
    messageLevel: 'error' | 'debug' | 'info',
    message: string,
    logOrigin: string,
  ) {
    if (this.logLevel === 'zero') return;
    if (messageLevel === 'error')
      this.buildMessage(messageLevel, message, logOrigin);
    if (
      this.logLevel === 'debug' &&
      (messageLevel === 'debug' || messageLevel === 'info')
    )
      this.buildMessage(messageLevel, message, logOrigin);
    if (this.logLevel === 'info' && messageLevel === 'info')
      this.buildMessage(messageLevel, message, logOrigin);
  }

  private buildMessage(
    messageLevel: 'error' | 'debug' | 'info',
    message: string,
    logOrigin: string,
  ) {
    const now = new Date();
    const resultMesage = `${now.toISOString()} - ${messageLevel.toUpperCase()}: ${message} | ${logOrigin} `;
    if (messageLevel === 'info') Logger.log('info', resultMesage);
    if (messageLevel === 'debug') Logger.warn('warn', resultMesage);
    if (messageLevel === 'error') Logger.error('error', resultMesage);
  }

  //TODO: add storing into DB (potentional problem with dependecies - can not import DbModule here)
}
