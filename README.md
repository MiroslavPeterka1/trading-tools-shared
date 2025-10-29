# Trading Tools Shared

Shared functions and modules for trading tools NestJS projects.

## Installation

```bash
npm install @mipet1984/trading-tools-shared
```

## Usage

### Importing the SharedModule

```typescript
import { Module } from '@nestjs/common';
import { SharedModule } from '@mipet1984/trading-tools-shared';

@Module({
  imports: [SharedModule],
  // ... your module configuration
})
export class AppModule {}
```

### Using Individual Services

```typescript
import { LogService } from '@mipet1984/trading-tools-shared';

@Injectable()
export class MyService {
  constructor(private readonly logService: LogService) {}

  someMethod() {
    this.logService.log('Hello from shared module!');
  }
}
```

### Using Helper Functions

```typescript
import { dateTimeHelper, delayHelper, envValidatorHelper } from '@mipet1984/trading-tools-shared';

// Use the helper functions as needed
```

## Development

### Building the Package

```bash
npm run build
```

### Creating a Local Package

```bash
npm run publish:local
```

This will create a `.tgz` file that you can install locally in other projects:

```bash
npm install /path/to/mipet1984-trading-tools-shared-1.0.0.tgz
```

## Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

- `@nestjs/common` ^10.0.0
- `class-validator` ^0.14.0
- `class-transformer` ^0.5.1
- `typeorm` ^0.3.0
- `reflect-metadata` ^0.1.13

## License

MIT
