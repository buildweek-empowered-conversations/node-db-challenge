
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'react',project_id:1},
        {id: 2, resource_name: 'node.js',project_id:1},
        {id: 3, resource_name: 'computer',project_id:1},
        {id: 4, resource_name: 'cheese',project_id:2},
        {id: 5, resource_name: 'tortillas',project_id:2},
        {id: 6, resource_name: 'green chile',project_id:2}



      ]);
    });
};
