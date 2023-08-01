/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { v4: uuid } = require('uuid')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(() =>
      knex('todos').insert([
        {
          id: uuid().replace(/-/g, '').slice(0, 11),
          title: 'Richard Love',
          description:
            'catch giving remarkable symbol rocky college future friend cup fish sheet cause read sharp cowboy properly establish sell influence business mill combine leg you',
          completed: false,
        },
        {
          id: uuid().replace(/-/g, '').slice(0, 11),
          title: 'Mina Lyons',
          description:
            'human main location space careful war aloud shoe greatly shut knife money equally got indeed earth ear gather future accept clothes free board tell',
          completed: false,
        },
        {
          id: uuid().replace(/-/g, '').slice(0, 11),
          title: 'Della Coleman',
          description:
            'have production favorite you goose pocket lips split concerned goes year lie recent worth thee becoming nation escape finger saddle promised this realize minerals',
          completed: false,
        },
      ])
    )
}
