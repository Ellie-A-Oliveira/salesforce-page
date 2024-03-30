import { PerguntasFrequentes } from "../interfaces/PerguntasFrequentes.interface";
import { BaseService } from "./Base.service";

export class PerguntasFrequentesService extends BaseService<PerguntasFrequentes> {
    public constructor() {
        super('perguntas-frequentes');
    }
}