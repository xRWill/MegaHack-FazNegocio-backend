'use strict'
const Env = use('Env')
const axios = require('axios')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */

class Gr1DBuscaDocController {
  /**
   * @param {object} ctx
   * @param {Params} ctx.params
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
   index({params, response}){

    return this.buscaDoc(params.doc)

  }

  async buscaDoc(doc){
    const result = await axios.get(`HTTPS://gateway.gr1d.io/sandbox/procob/v1/consultas/v2/L0001/${doc}`,
    {headers:{ 'X-Api-Key': Env.get('GR1D_PROCOB_KEY') }})
    return result.data
  }
}

module.exports = Gr1DBuscaDocController

