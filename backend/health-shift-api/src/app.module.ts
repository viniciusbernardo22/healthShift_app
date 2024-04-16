import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnidadesModule } from './unidades/unidades.module';

@Module({
  imports: [UnidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
