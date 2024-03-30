import { Empresa } from "./Empresa.interface"
import { TipoPlano } from "./TipoPlano.interface";
import { TipoProduto } from "./TipoProduto.interface";

export interface Produto {
    id: number
    empresa: Empresa;
    preco: number;
    status: string;
    planoContratado: TipoPlano;
    tipoProduto: TipoProduto;
    testeGratisAte: Date;
}