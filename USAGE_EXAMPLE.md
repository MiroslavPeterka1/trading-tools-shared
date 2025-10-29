# Example Usage in Another NestJS Project

## 1. Install the package

### From local file (for testing):

```bash
npm install /path/to/mipet1984-trading-tools-shared-1.0.0.tgz
```

### From npm registry (after publishing):

```bash
npm install @mipet1984/trading-tools-shared
```

## 2. Import and use in your project

### app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { SharedModule } from '@mipet1984/trading-tools-shared';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SharedModule], // Import the shared module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### app.service.ts

```typescript
import { Injectable } from '@nestjs/common';
import { LogService } from '@mipet1984/trading-tools-shared';

@Injectable()
export class AppService {
  constructor(private readonly logService: LogService) {}

  getHello(): string {
    this.logService.log('Hello method called');
    return 'Hello World!';
  }
}
```

### Using helpers directly

```typescript
import { dateTimeHelper, delayHelper, envValidatorHelper } from '@mipet1984/trading-tools-shared';

// Use helper functions
const formattedDate = dateTimeHelper.format(new Date());
await delayHelper.wait(1000);
const isValidEnv = envValidatorHelper.validate(process.env);
```

## 3. Make sure to install peer dependencies

```bash
npm install @nestjs/common class-validator class-transformer typeorm reflect-metadata
```
