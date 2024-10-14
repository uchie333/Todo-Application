/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').truncate()
  await knex('todos').insert([
{
    message: "hi!"
},
{
    message: "hi again!!"
},
{
    message: "You, Yes you!!!"
},
{
    message: "You rock!!!!"
}
  ])
};
