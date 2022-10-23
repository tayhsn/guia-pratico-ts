import express, { Application, Request, Response } from 'express'
import { Database } from './infra/db'
import NewsController from './controller/newsController'

class StartUp {
  public app: Application
  private _db: Database = new Database()

  constructor() {
    this.app = express()
    this._db.createConnection()
    this.routes()
  }

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({ versao: '0.0.1' })
    })

    this.app
      .route('/api/v1/news/:page/:qtd')
      .get((req: Request, res: Response) => {
        return NewsController.get(req, res)
      })

    this.app.route('/api/v1/news/:id').get((req: Request, res: Response) => {
      return NewsController.getById(req, res)
    })
  }
}

export default new StartUp()
