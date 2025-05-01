import { Router } from "express";
import modelController from "../controllers/model.controller";
import { checkAdmin } from "../middlewares/auth.middleware";
import { validationMiddleware } from "../middlewares/validator.middleware";
import { CreateVehicleModelDTO, UpdateVehicleModelDTO } from "../dtos/model.dto";

const router = Router();

router.post("/", checkAdmin, validationMiddleware(CreateVehicleModelDTO), modelController.createVehicleModel);
router.get("/", modelController.getVehicleModels);
router.get("/:id", modelController.getVehicleModelById);
router.put("/:id", checkAdmin, validationMiddleware(UpdateVehicleModelDTO, true), modelController.updateVehicleModel);
router.delete("/:id", checkAdmin, modelController.deleteVehicleModel);

export default router;
