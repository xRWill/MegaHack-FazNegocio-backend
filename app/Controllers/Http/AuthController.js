'use strict'

const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
class AuthController {
  /**
   * @param {object} ctx
   * @param {Params} ctx.params
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async register({request}){
 const data = request.only(['name', 'email', 'password'])
 const user = await User.create(data)
    return user

  }

  async authenticate({request, auth}){
    const {email, password} = request.all()

    const token = await auth.attempt(email,password)

    return {user: {name:"teste", email:"teste@faznegocio.com.br" }, ...token}
  }
}

module.exports = AuthController
