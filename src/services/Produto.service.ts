import { Produto } from "../interfaces/Produto.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class ProdutoService extends BaseService<Produto> {
    public constructor(
        httpService: HttpService<Produto>
    ) {
        super(httpService, 'produto');
    }
}