import { Empresa } from "../interfaces/Empresa.interface";
import { BaseService } from "./Base.service";

export class EmpresaService extends BaseService<Empresa> {
    public constructor() {
        super('empresa');
    }
}