import { Cliente } from "../interfaces/Cliente.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class ClienteService extends BaseService<Cliente> {
    public constructor(
        httpService: HttpService<Cliente>
    ) {
        super(httpService, 'cliente');
    }
}