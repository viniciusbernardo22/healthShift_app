import { Controller, Get } from '@nestjs/common';
import { AppService, HealthStatus } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  GetHealthStatus(): HealthStatus {
    return this.appService.GetHealthStatus();
  }
}
