import { MutationsService, QueriesService } from './services'

export class ScalarsClient {
    private readonly queriesService: QueriesService
    private readonly mutationsService: MutationsService

    constructor() {
        this.queriesService = new QueriesService()
        this.mutationsService = new MutationsService()
    }

    get query () {
        return this.queriesService
    }

    get mutation () {
        return this.mutationsService
    }
}
