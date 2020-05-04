'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddFieldCellphoneUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('cellphone', 60)
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('cellphone')
    })
  }
}

module.exports = AddFieldCellphoneUsersSchema
