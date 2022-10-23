import { Result } from '../infra/result'

export interface INewService {
  get: (id: string) => void
  getAll: (page: number, qtd: number) => Promise<Result>
}
