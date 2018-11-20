import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import Table from '../table';
import { encode, decode } from '../utils/tokens';
import { checkPassword } from '../utils/security';

let authorsTable = new Table('authors');
let tokensTable = new Table('tokens');

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    }, async (email, password, done) => {
        try {
            let [author] = await authorsTable.find({ email });
            if (author && author.hash) {
                let matches = await checkPassword(password, author.hash)
                if (matches) {
                    let insert = await tokensTable.insert({
                        authorid: author.id
                    });
                    let token = await encode(insert.id);
                    return done(null, { token });
                } else {
                    return done(null, false, { message: 'Invalid credentials' });
                }
            }
        } catch (err) {
            return done(err);
        }
    }));

    passport.use(new BearerStrategy(async (token, done) => {
        let tokenId = decode(token);
        if (!tokenId) {
            return done(null, false, { message: 'Invalid token' });
        }
        try {
            let tokenRecord = await tokensTable.getOne(tokenId);
            let author = await authorsTable.getOne(tokenRecord.authorid);
            if (author) {
                delete author.password;
                return done(null, author);
            } else {
                return done(null, false, { message: 'Invalid token' });
            }
        } catch (err) {
            return done(err);
        }
    }));

    app.use(passport.initialize());
}

export default configurePassport;