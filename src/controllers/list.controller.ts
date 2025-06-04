import { Prisma } from "@prisma/client";
import { db } from "../../prisma/prisma";

export const getList = async ()=>{
    const result = await db.list.findMany();
    return result;
}


export const addToDo = async (title:string)=>{
    const result = await db.list.create({
        data:{
            title
        }
    });
    return result;
}

export const deleteToDo = async (id:number) =>{
    const result = await db.list.delete({where:{id}})

    return result
}
export const updateToDo = async (id:number, title:string, done:boolean) =>{
    const result = await db.list.update({
        where:{id},
        data:{
            title:title,
            done:done
        }
    
    })

    return result
}