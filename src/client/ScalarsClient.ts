import { MutationsService, QueriesService } from './services'

export class ScalarsClient {
    private readonly queriesService: QueriesService
    private readonly mutationsService: MutationsService

    constructor() {
        this.queriesService = new QueriesService()
        this.mutationsService = new MutationsService()
    }

    get queries () {
        return this.queriesService
    }

    get mutations () {
        return this.mutationsService
    }
}
