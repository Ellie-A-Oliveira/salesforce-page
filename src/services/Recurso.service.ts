import { Recurso } from "../interfaces/Recurso.interface";
import { BaseService } from "./Base.service";

export class RecursoService extends BaseService<Recurso> {
    public constructor() {
        super('recurso');
    }
}