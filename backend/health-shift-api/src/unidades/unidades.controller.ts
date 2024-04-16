import { UnidadesService } from './unidades.service';
import { Controller, Get } from '@nestjs/common';

@Controller('unidades')
export class UnidadesController {

    constructor(private readonly service: UnidadesService) {
        
    }

    @Get()
    GetUnidades(): string {
        return this.service.listarUnidades();
    }
}
