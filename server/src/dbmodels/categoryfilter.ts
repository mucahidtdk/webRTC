import mongoose from 'mongoose'
const Schema=mongoose.Schema;

const categoryValue=new Schema({
    name:String,
    subFilter:{type:mongoose.Types.ObjectId,default:null,ref:"CategoryFilter"},
})

const categoryFilterSchema = new Schema({
    name:String,
    value:[categoryValue],
    parentFilter:{type:mongoose.Types.ObjectId,default:null,ref:"CategoryValue"},
})


export const CategoryValue = mongoose.model("CategoryValue",categoryValue)
export const Category = mongoose.model("CategoryFilter",categoryFilterSchema,'categoryfilter')