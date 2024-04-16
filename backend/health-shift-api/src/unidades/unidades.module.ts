import { Module } from '@nestjs/common';
import { UnidadesController } from './unidades.controller';
import { UnidadesService } from './unidades.service';

@Module({
  controllers: [UnidadesController],
  providers: [UnidadesService]
})
export class UnidadesModule {}
