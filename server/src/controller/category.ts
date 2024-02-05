import {Request,Response} from 'express';
import { Category } from '../dbmodels';

type newCategory={
    name:string
}

export const getCategorys = (req:Request, res:Response) => {
    try {
        return res.status(200).send("ok");
    } catch (error) {
        res.status(500).send({ message: error instanceof Error?error.message:"fail"})
    }
}

export const createCategory = (req:Request,res:Response)=>{
    try {
        //console.log(req.body)
        const data:newCategory=req.body
        
        console.log(data)
        Category.create(data)
        return res.status(200).send("created");
    } catch (error) {
        res.status(500).send({ message: error instanceof Error?error.message:"fail"})
    }
}