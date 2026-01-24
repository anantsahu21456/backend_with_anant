import { Router } from "express";
import { loginStudent, registerStudent, updateStudentProfile } from "../controllers/student.controller.js";

const router = Router();

router.route('/register_Student').post(registerStudent)
router.route('/login_Student').post(loginStudent)
router.route('/update_Student_Profile').put(updateStudentProfile)

export default router;