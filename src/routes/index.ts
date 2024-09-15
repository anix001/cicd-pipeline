import { Router } from "express";
import userRoutes from './userRoutes';

const router = Router();

//[Routes]
router.use('/user', userRoutes);

export default router;