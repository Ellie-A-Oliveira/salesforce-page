import { TipoPlano } from "../interfaces/TipoPlano.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class TipoPlanoService extends BaseService<TipoPlano> {
    public constructor(
        httpService: HttpService<TipoPlano>
    ) {
        super(httpService, 'tipo-plano');
    }
}