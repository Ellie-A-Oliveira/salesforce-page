import { Funcionario } from "../interfaces/Funcionario.interface";
import { BaseService } from "./Base.service";

export class FuncionarioService extends BaseService<Funcionario> {
    public constructor() {
        super('funcionario');
    }
}