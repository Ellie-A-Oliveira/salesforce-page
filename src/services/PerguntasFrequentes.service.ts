import { PerguntasFrequentes } from "../interfaces/PerguntasFrequentes.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class PerguntasFrequentesService extends BaseService<PerguntasFrequentes> {
    public constructor(
        httpService: HttpService<PerguntasFrequentes>
    ) {
        super(httpService, 'perguntas-frequentes');
    }
}