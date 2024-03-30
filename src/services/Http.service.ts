export class HttpService<T> {
    static readonly BASE_URL = 'http://localhost:8085/';

    private async request(uri: string, method: string, body?: object): Promise<T> {
        const fullUrl = HttpService.BASE_URL + uri;
        const response = await fetch(
            fullUrl,
            {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }
        );
        return await response.json();
    }
    public async get(uri: string): Promise<T> {
        const response = await this.request(uri, 'GET');
        return response;
    }

    public async post(uri: string, body: object): Promise<T> {
        const response = await this.request(uri, 'POST', body);
        return response;
    }

    public async put(uri: string, body: object): Promise<T> {
        const response = await this.request(uri, 'PUT', body);
        return response;
    }

    public async delete(uri: string): Promise<T> {
        const response = await this.request(uri, 'DELETE');
        return response;
    }
}