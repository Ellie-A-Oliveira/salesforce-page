interface ServiceToProvide {
	provide: any;
	instance: any;
}

export class Provider {

    private static _executing = false;
    private static services: ServiceToProvide[] = [];

    static provide(service: any) {
        if (Provider._executing) {
            Provider.wait();
        }
        Provider._executing = true;

        const existingService = Provider.services.find(s => s.provide === service);
        if (existingService) {
            return existingService.instance;
        }
    
        const instance = new service();
        Provider.services.push({ provide: service, instance });
        Provider._executing = false;
        return instance;
    }

    private static wait() {
        return setTimeout(() => {
            if (!Provider._executing) {
                return;
            } else {
                Provider.wait();
            }
        }, 0);
    }
}