import passport from 'passport';

function tokenMiddleware(req, res, next) {
    passport.authenticate('bearer', { session: false }) (req, res, next);
}

function isLoggedIn(req, res, next) {
    if (req.author) {
        next();
    } else {
        res.sendStatus(401);
    }
}

export { tokenMiddleware, isLoggedIn };