import { Funcionario } from "../interfaces/Funcionario.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class FuncionarioService extends BaseService<Funcionario> {
    public constructor(
        httpService: HttpService<Funcionario>
    ) {
        super(httpService, 'funcionario');
    }
}