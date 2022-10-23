import { INewService } from '../contracts/iNewsService'
import { Result } from '../infra/result'
import { NewsRepository } from '../repository/newRepository'

export class NewsService implements INewService {
  get = async (_id: string) => {
    return await NewsRepository.findById(_id)
  }

  getAll = async (page: number, qtd: number): Promise<Result> => {
    let result = new Result()

    result.Page = page
    result.Qtd = qtd
    result.Total = await NewsRepository.count({})
    result.Data = await NewsRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd)

    return result
  }
}
