import { Request, Response, Router } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { handleError } from "../utils";

const prisma = new PrismaClient();
const router = Router();

router.post("/", async(req: Request, res: Response) => {
  const { email, name } = req.body;
  try {
    const user = {
      email,
      name,
    };

    const createUser = await prisma.user.create({ data: user })
    return res.status(200).send({
      message:'User created successfully',
      data: createUser
    })

  } catch (error) {
    handleError(error, 'Error Creating User');
  }
});

router.get('/', async(req:Request, res:Response)=>{
     try{
       const users = await prisma.user.findMany();
       return res.status(200).send({
        message:'Users fetched successfully!!',
        data: users
      })
     }catch(error){
        handleError(error,'Error Fetching Users')
     }
})


export default router;