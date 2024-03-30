import { TipoPlano } from "../interfaces/TipoPlano.interface";
import { BaseService } from "./Base.service";

export class TipoPlanoService extends BaseService<TipoPlano> {
    public constructor() {
        super('tipo-plano');
    }
}