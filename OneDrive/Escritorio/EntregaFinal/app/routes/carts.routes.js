import { Router } from 'express';
import passport from 'passport';
import { purchaseCart } from '../controllers/carts.controller.js';
import { isUser } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/:cid/purchase', passport.authenticate('jwt', { session: false }), isUser, purchaseCart);

export default router;