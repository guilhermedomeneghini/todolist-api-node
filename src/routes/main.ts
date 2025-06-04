import { Router } from 'express';
import { addToDo, deleteToDo, getList, updateToDo } from '../controllers/list.controller';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

//Listagem da lista
mainRouter.get('/lista', async (req, res)=>{
    const result = await getList();

    res.json(result)
})

//Adicionar item a lista
mainRouter.post('/lista', async (req,res)=>{
    const toDo = req.body.title;
    const result = await addToDo(toDo);

    res.status(201).json(result)
})

mainRouter.delete('/lista', async (req,res)=>{
    const toDo = parseInt(req.body.id);
    const result = await deleteToDo(toDo);

    res.status(201).json(result)
})

mainRouter.put('/lista', async (req,res)=>{
    const toDo = parseInt(req.body.id);
    const done = String(req.body.done).toLowerCase() === 'true';
    if(isNaN(toDo)){
        return res.status(400).json({error:'Informe um número no ID'});
    } else{
        const result = await updateToDo(toDo, req.body.title, done);
        return res.status(201).json(result)
    }

    
    

    
})

