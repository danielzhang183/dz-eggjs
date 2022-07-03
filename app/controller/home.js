const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.tpl', { username: 'dylan' })
    // this.ctx.body = 'Hello world'
  }
}

module.exports = HomeController