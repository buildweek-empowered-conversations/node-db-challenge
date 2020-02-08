const db = require('../dbConfig');

module.exports = {
    find,
    findById,
    findTasks,
    update,
    add,
    addTask,
    updateTask,
    getResources,
    addResource,
    findresources,
    remove
}

function find (){
    return db('projects')
  
}
function findresources(){
    return db('resources')
}

function findById(id){
    return db('projects')
    .where({id})
    .first();
}

function findTasks(id){
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.name','t.task_number', 't.instructions')
    .where({project_id: id})
}
function getResources(id){
    return db('resources as r', 'project_resources as pr')
     .join('projects as p', 'p.id','r.project_id')
    .select('p.name','r.resource_name')
    .where('r.project_id','=',id) ;
}
// function add (project){
//     db('projects')
//     .insert(project)
//     .then(ids => {
//         return findById(ids[0]);
//     });
// }

 async function add (project){
    // const{id}=project.id
    
    await db('projects').insert(project);
    // return findById(id)
}

async function addTask (task, project_id){
    await db('tasks').insert(task, project_id)
}


async function addResource(resource, project_id){
    await db('resources').insert(resource, project_id)

}

async function update(changes, id){
    await db('projects')
    .where({id})
    .update(changes)
    return findById(id);
}



async function updateTask(changes,id){
    await db('tasks')
    .where({id})
    .update(changes)
}

function remove(id){
    db('projects')
    .where( {id:req.params.id})
    .del()
}


 