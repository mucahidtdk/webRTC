import mongoose from 'mongoose'
const Schema=mongoose.Schema;


const categorySchema = new Schema({
    name:String,
    parentCategory:{type:mongoose.Types.ObjectId,default:null},
    categoryFilter:[{type:mongoose.Types.ObjectId,ref:"CategoryFilter"}]
})


export const Category = mongoose.model("Category",categorySchema,'category')