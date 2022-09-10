const categories = require('../model/category')

const getAllCategory = async () => {
    try{
        const category = await categories.find()
        return category
    }catch(e){
        console.log(e.message);
    }
}

const getCategoryById = async (id) => {
    try{
        const category = await categories.findById(id)
        return category
    }catch(e){
        console.log(e.message);
    }
}

const createCategory = async (_category) => {
    try{
        const category = await categories.create(_category)
        return category
    }catch(e){
        console.log(e.message);
    }
}

const deleteCategory = async (id) => {
    try{
        const category = categories.findById(id)
        if(!category){
            return "id not found"
        } 
        await categories.deleteOne({_id: id})
        return "delete success"
    }catch(e){
        console.log(e.message);
    }
}

module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById,
    deleteCategory
}