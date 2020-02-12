 
        exports.up = function(knex) {
            return knex.schema
              .createTable("projects", tbl => {
                tbl.increments("id");
                tbl
                  .text("name", 128)
                  .unique()
                  .notNullable();
                  tbl.boolean('completed').defaultTo(false);
                  tbl.text('description', 225)
              })
              .createTable("tasks", tbl => {
                tbl.increments();
                tbl
                  .integer("task_number")
                  .unsigned()
                  .notNullable();
                tbl.text("instructions").notNullable();
                tbl
                  .integer("project_id")
                  .unsigned()
                  .notNullable()
                  .references("id")
                  .inTable("projects")
                  .onUpdate("CASCADE")
                  .onDelete("CASCADE");
              })
          
              .createTable("resources", tbl => {
                tbl.increments("id");
                tbl.text("resource_name", 128)
                .unique()
                .notNullable();
                tbl.text("description", 225);
                tbl.integer('project_id')
                .unsigned()
                  .notNullable()
                  .references("id")
                  .inTable("projects")
                  .onUpdate("CASCADE")
                  .onDelete("CASCADE");
              })
              .createTable("project_resource", tbl => {
                tbl.increments("id");
                tbl
                  .integer("project_id")
                  .unsigned()
                  .notNullable()
                  .references("projects.id")
                   .onUpdate("CASCADE")
                  .onDelete("CASCADE");
                tbl
                  .integer("resource_id")
                  .unsigned()
                  .notNullable()
                  .references('resources.id')
                  .onUpdate("CASCADE")
                  .onDelete("CASCADE")
                //   tbl.primary(['project_id', 'resource_id']);
              });
          };
          
          exports.down = function(knex) {
            return knex.schema
              .dropTableIfExists("project_resource")
              .dropTableIfExists("resources")
              .dropTableIfExists("tasks")
              .dropTableIfExists("projects");
          };
        
       