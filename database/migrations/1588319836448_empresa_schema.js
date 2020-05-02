'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('doc', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
