import { Router } from "express";
import { randomImg } from "./controllers";

const router = Router();

router.get("/random", randomImg);

export default router;
