import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { UserModel } from '../models/User.model.js';

const JWT_SECRET = process.env.JWT_SECRET;

passport.use('jwt', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}, async (jwt_payload, done) => {
    try {
        const user = await UserModel.findById(jwt_payload.id);
        return user ? done(null, user) : done(null, false);
    } catch (err) {
        return done(err, false);
    }
}));