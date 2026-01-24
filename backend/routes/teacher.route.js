import { Router } from "express";
import { loginTeacher, logOutFromTeacherProfile, registerTeacher, updateTeacherProfile } from "../controllers/teacher.controller.js";

const router = Router();

router.route('/register_teacher').post(registerTeacher)
router.route('/login_Teacher').post(loginTeacher)
router.route('/update_Teacher_Profile').put(updateTeacherProfile)
router.route('/logOut_From_Teacher_Profile').post(logOutFromTeacherProfile)



export default router;