import express from "express"
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus, getAppointmentsCount } from "../controller/appointmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middleware/auth.js"

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
router.get("/count", getAppointmentsCount);

export default router;