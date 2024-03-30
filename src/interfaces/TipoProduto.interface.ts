import { TipoPlano } from "./TipoPlano.interface";

export interface TipoProduto {
    id: number;
    nome: string;
    descricao: string;
    planosDisponiveis: TipoPlano[];
    isAddOn: boolean;
    nomeGrupo: string;
}