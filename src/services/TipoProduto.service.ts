import { TipoProduto } from "../interfaces/TipoProduto.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class TipoProdutoService extends BaseService<TipoProduto> {
    public constructor(
        httpService: HttpService<TipoProduto>
    ) {
        super(httpService, 'tipo-produto');
    }
}