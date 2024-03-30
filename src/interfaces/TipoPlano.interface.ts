import { Recurso } from "./Recurso.interface";

export interface TipoPlano {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    tipoPreco: string;
    nivelPlano: number;
    recursos: Recurso[];
    testeGratisDisponivel: boolean;
}