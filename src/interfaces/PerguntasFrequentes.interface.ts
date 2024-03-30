import { TipoProduto } from "./TipoProduto.interface";

export interface PerguntasFrequentes {
    id: number;
    tipoProduto: TipoProduto;
    pergunta: string;
    resposta: string;
}