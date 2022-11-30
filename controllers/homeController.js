const Task = require('../models/task');
const Category = require('../models/category');
//const dateFormat = require('dateformat');

module.exports.home = async function(req,res){
    let tasks = await Task.find({});
    let category =  await Category.find({});
    return res.render('home',
    {
        title:"ToDo",
        tasks : tasks,
        Category : category
    });
};

module.exports.addTask = function(req,res){
    //console.log(req.body);
    Task.create(req.body,function(err,newTask)
    {
        if(err)
        {
            console.log('Error in inserting data:',err);
            return res.status(400).json({
                message:"Internal Server Error"
            });
        }
        //console.log('***newTask added to DB',newTask);
        return res.redirect('back');

    });
}

module.exports.markAsDone =  async function(req,res)
{
    let taskid= req.params.id;
    //console.log(taskid);
    try{

        let task =  await Task.findById(taskid);
        //console.log(task);
        await Task.updateOne({_id:taskid},{
            isdone:!task.isdone
        });
    }
    catch(err)
    {
        console.log('error in mark as done function:',err);
        return res.redirect('back');
    }
    
    // Task.findById(taskid,function(err,task){
    //     if(err)
    //     {
    //         console.log('Error in updating mar as done:',err);
    //         return;
    //     }
    //     if(task)
    //     {
    //         Task.updateOne({id:id},{
    //             isdone : !task.isdone
    //         })
    //     }
    // });
    
    return res.redirect('back');

}

module.exports.deleteTask = function(req,res)
{
    let taskid = req.query.id;
    Task.deleteOne(taskid,function(err){
        if(err)
        {
            console.log('Error in deleting the task:',err);
            return res.status(400).json({
                message:"Internal Server Error"
            });
        }
        return res.redirect('back');
    });
}

