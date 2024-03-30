import { Empresa } from "../interfaces/Empresa.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class EmpresaService extends BaseService<Empresa> {
    public constructor(
        httpService: HttpService<Empresa>
    ) {
        super(httpService, 'empresa');
    }
}