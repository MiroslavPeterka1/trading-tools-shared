import { Logger } from '@nestjs/common';

export function validateEnvVariables(record: Record<string, any>, validatedEnvVariables: string[]): Record<string, any> {
  let isValid = true;

  for (const varName of validatedEnvVariables) {
    if (!record[varName]) {
      Logger.error(`Missing ${varName} ENV variable`);
      isValid = false;
    }
  }
  if (!isValid) throw new Error('Uncopleted ENV variables');
  return record;
}
