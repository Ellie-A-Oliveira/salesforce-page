import { Cliente } from "../interfaces/Cliente.interface";
import { BaseService } from "./Base.service";

export class ClienteService extends BaseService<Cliente> {
    public constructor() {
        super('cliente');
    }
}