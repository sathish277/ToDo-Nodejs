const Category =  require('../models/category');

module.exports.addCategory =async function(req,res)
{
    try
    {
        //console.log(req.body);
        await Category.create(req.body);
    }
    catch(err)
    {
        console.log('error in creating Category:',err);
    }
    return res.redirect('/');

}

module.exports.show = function(req,res)
{
    return res.render('category',{
        title:"category"
    })
}