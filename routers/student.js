import { Router } from "express";
import { studentController } from './../controllers/index.js'

const router = Router()
router.get('/', studentController.getAllStudents)

router.get('/:id', studentController.getStudentByID)

// patch
router.patch('/', studentController.updateStudent)

// put  or patch
router.post('/', studentController.insertStudent)

export default router