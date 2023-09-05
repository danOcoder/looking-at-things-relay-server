import { Router } from "express";
import { random } from "./controllers";

const router = Router();

router.get("/random", random);

export default router;
