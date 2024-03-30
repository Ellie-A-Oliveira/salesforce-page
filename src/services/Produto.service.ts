import { Produto } from "../interfaces/Produto.interface";
import { BaseService } from "./Base.service";

export class ProdutoService extends BaseService<Produto> {
    public constructor() {
        super('produto');
    }
}