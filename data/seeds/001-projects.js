
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Make Website'},
        {id: 2, name: 'Enchiladas'},
        {id: 3, name: 'Write a Book'}
      ]);
    });
}; 
