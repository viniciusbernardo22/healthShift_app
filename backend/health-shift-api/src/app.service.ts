import { Injectable } from '@nestjs/common';

export type HealthStatus = {
  Status: string;
  Hora: Date;
};
@Injectable()
export class AppService {
  GetHealthStatus(): HealthStatus {
    return {
      Status: 'OK',
      Hora: new Date(),
    };
  }
}
