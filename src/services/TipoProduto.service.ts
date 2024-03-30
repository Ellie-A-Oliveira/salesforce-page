import { TipoProduto } from "../interfaces/TipoProduto.interface";
import { BaseService } from "./Base.service";

export class TipoProdutoService extends BaseService<TipoProduto> {
    public constructor() {
        super('tipo-produto');
    }
}