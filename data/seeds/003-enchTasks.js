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
          instructions:
            "Roll up tortillas, fill with Cheese, top with Green Chile",
          project_id: 2
        },
        {
          id: 2,
          task_number: 2,
          instructions: "Bake at 400 degrees for 15 minutes",
          project_id:2
        },
        { id: 3, task_number: 3, 
          instructions: "Eat it! Yumm",
         project_id: 2 }
      ]);
    });
};
