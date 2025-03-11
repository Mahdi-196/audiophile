<<<<<<< HEAD
import { Router } from 'express';
import loginRoutes from './loginRoutes.js';
import registerUserRoutes from './registerUser.js';
import bookRoutes from './bookRoutes.js';

const router = Router();

router.use('/login', loginRoutes);
router.use('/registerUser', registerUserRoutes);
router.use('/books', bookRoutes);

=======
import { Router } from 'express';
import loginRoutes from './loginRoutes.js';
import registerUserRoutes from './registerUser.js';
import bookRoutes from './bookRoutes.js';

const router = Router();

router.use('/login', loginRoutes);
router.use('/registerUser', registerUserRoutes);
router.use('/books', bookRoutes);

>>>>>>> refs/remotes/origin/Andrew
export default router;