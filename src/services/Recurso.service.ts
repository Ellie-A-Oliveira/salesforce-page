import { Recurso } from "../interfaces/Recurso.interface";
import { BaseService } from "./Base.service";
import { HttpService } from "./Http.service";

export class RecursoService extends BaseService<Recurso> {
    public constructor(
        httpService: HttpService<Recurso>
    ) {
        super(httpService, 'recurso');
    }
}