import { Provider } from "../scripts/provider";
import { HttpService } from "./Http.service";

export class BaseService<T> {
    httpService: HttpService<T>;

    public constructor(
        private readonly BASE_URI: string
    ) {
        this.httpService = Provider.provide(HttpService);
    }

    public async getAll() {
        return await this.httpService.get(this.BASE_URI);
    }

    public async getById(id: number) {
        return await this.httpService.get(`${this.BASE_URI}/${id}`);
    }

    public async create(resource: Partial<T>) {
        return await this.httpService.post(this.BASE_URI, resource);
    }

    public async update(id: number, resource: Partial<T>) {
        return await this.httpService.put(`${this.BASE_URI}/${id}`, resource);
    }

    public async delete(id: number) {
        return await this.httpService.delete(`${this.BASE_URI}/${id}`);
    }
}