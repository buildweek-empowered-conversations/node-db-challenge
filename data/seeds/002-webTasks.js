exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_number: 1,
          instructions: "Make backend with Node.js",
          project_id: 1
        },
        {
          id: 2,
          task_number: 2,
          instructions: "make Frontend with React",
          project_id: 1
        },
        {
          id: 3,
          task_number: 3,
          instructions: "Deploy to Heroku, if it works",
          project_id: 1
        }
      ]);
    });
};
