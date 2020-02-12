const express = require('express');


const Projects = require('../data/helpers/project-model')
const router = express.Router();

router.get('/', (req,res)=> {
    Projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get projects'})
    })
})
router.get('/resources', (req,res)=> {
    Projects.findresources()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get projects'})
    })
})

router.get('/:id', (req,res)=> {
    const {id}= req.params;

    Projects.findById(id)
    .then(project => {
        if(project){
            res.json(project);
        }else{
            res.status(404).json({message: 'Could not find'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get the Project'})
    })
})

router.get('/:id/tasks', (req,res)=> {
    const {id}= req.params;

    Projects.findTasks(id)
    .then(tasks => {
        if (tasks.length){
        res.json(tasks);
    }else{
        res.status(404).json({message: 'Tasks could not be found'})
    }
    })
    .catch(err=> {
        res.status(500).json({message: 'Failed to get the tasks'})
    });
});

router.post('/', (req,res)=> {
    const projectData = req.body;

    Projects.add(projectData)
    .then(project=> {
        res.status(201).json(project);
    })
    .catch(err=> {
        res.status(500).json({message: 'Failed to create.'})
    });
});

router.put('/:id', (req,res)=> {

    const{id} = req.params;
    const changes = req.body;

     Projects.findById(id)
    .then(project => {
        if(project){
            Projects.update(changes, id)
            .then(updated => {
                res.json(updated)
            });

        }else{
            res.status(404).json({message: 'Could not find the Project'})
        }

    })
    .catch(err=> {
        res.status(500).json({message: 'Failed to Update'})
    });
});


router.post('/:id/tasks', (req,res)=> {
    const taskData = req.body;
    const {id}=req.params;

    Projects.findById(id)
    .then(project=> {
        if(project){
            Projects.addTask(taskData,id)
            .then(task=> {
                res.status(201).json(task)
            })
        }else{
            res.status(404).json({message: 'COuld not be found'})
        }
    })
    .catch(err=> {
        res.status(500).json({message: 'could not post the task'})
    })

})

router.post('/:id/resources',(req,res)=> {
    const resourceData= req.body;
    const{id}=req.params;

    Projects.findById(id)
    .then(resource=> {
        if(resource){
            Projects.addResource(resourceData,id)
            .then(resource=> {
                res.status(201).json(resource)
            })
        }else{
            res.status(404).json({message: 'could not be found'})
        }
    })
    .catch(err=> {
        res.status(500).json({message: 'could not post'})
    })
})
 

router.put('/:id/tasks',(req,res)=> {
    const newTask = req.body;
    const {id}= req.params;
    

    Projects.updateTask(newTask,id)
    .then(task=> {
        res.status(200).json(task)
    })
    .catch(err=> {
        res.status(500).json({message: 'Cannot update the task'})
    })

})

router.get('/:id/resources', (req,res)=> {
    const {id} = req.params;
    Projects.getResources(id)

    .then(resource=> {
        if(resource.length){
        res.status(200).json(resource)
    }else{
        res.status(404).json({message: 'could not find the resources'})
    }
    })
    .catch(err=> 
        res.status(500).json({message:' error finding the resources.'}))
})

router.get('/:id/all', (req,res)=> {
    const {id}= req.params;
    Projects.findWholeThing(id)
    .then(e => {
        if(e){
            res.status(200).json(e)
        }else{
            res.status(404).json({message: 'could not find'})
        }
    })
    .catch(err=> {
        res.status(500).json({message: 'error finding the resources'})
    })
})

router.delete('/:id', (req,res)=> {
    const {id} = req.params.id;

    Projects.remove(id)
    .then(count => {
        if(count>0){
            res.status(200).json({message: 'The project has been destroyed'})
        }else{
            res.status(500).json({message: 'error deleting.'})
        }
    })
})




module.exports = router;