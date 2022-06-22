import { inject } from 'tsyringe'
import { SpentsData } from '../Domain/SpentsData'
import { SpentService } from '../Domain/SpentService'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { GetSpentsRepositoryJson } from '../Infra/Json/GetSpentsRepositoryJson'
import { SpentsDataRepositoryAppJson } from '../Infra/Json/SpentsDataRepositoryAppJson'

export class SpentServiceImpl implements SpentService {
    constructor(
        @inject(SpentsRepositoriesEnum.APP_REPOSITORY) private spentsDataRepositoryJson: SpentsDataRepositoryAppJson,
        @inject(SpentsRepositoriesEnum.SPENTS_REPOSITORY) private getSpentsRepository: GetSpentsRepositoryJson
    ) {}

    private getSpent(data: SpentsData): SpentsData {
        const spent = this.getSpentsRepository.getSpents(data)

        return spent
    }

    async export(data: SpentsData) {
        const spentsToSave = []
        const spents = this.getSpent(data)
        
        spentsToSave.push(spents)

        await this.spentsDataRepositoryJson.save(spentsToSave)
    }
}