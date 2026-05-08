var db = require('../models')
var LocalStrategy = require('passport-local').Strategy
var bCrypt = require('bcrypt')


module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id)
    });

    passport.deserializeUser(function (uid, done) {
        db.User.findOne({
            where: {
                'id': uid
            }
        }).then(function (user) {
            if (user) {
                done(null, user);
            } else {
                done(null, false)
            }

        })
    })

    passport.use('login', new LocalStrategy({
            passReqToCallback: true
        },
        function (req, username, password, done) {
            db.User.findOne({
                where: {
                    'login': username
                }
            }).then(function (user) {
                if (!user) {
                    return done(null, false, req.flash('danger', 'Invalid Credentials'))
                }
                isValidPassword(user, password, function (err, isValid) {
                    if (err) {
                        return done(err);
                    }
                    if (!isValid) {
                        return done(null, false, req.flash('danger', 'Invalid Credentials'))
                    }
                    return done(null, user);
                });
            });
        }))

    var isValidPassword = function (user, password, callback) {
        bCrypt.compare(password, user.password, function (err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        });
    }

    passport.use('signup', new LocalStrategy({
            passReqToCallback: true
        },
        function (req, username, password, done) {
            findOrCreateUser = function () {
                db.User.findOne({
                    where: {
                        'email': username
                    }
                }).then(function (user) {
                    if (user) {
                        return done(null, false, req.flash('danger', 'Account Already Exists'));
                    } else {
                        if (req.body.email && req.body.password && req.body.username && req.body.cpassword && req.body.name) {
                            if (req.body.cpassword == req.body.password) {
                                db.User.create({
                                    email: req.body.email,
                                    password: createHash(password),
                                    name: req.body.name,
                                    login: username
                                }).then(function (user) {
                                    return done(null, user)
                                })
                            } else {
                                return done(null, false, req.flash('danger', 'Passwords dont match'));
                            }
                        } else {
                            return done(null, false, req.flash('danger', 'Input field(s) missing'));
                        }
                    }
                });
            };
            process.nextTick(findOrCreateUser)
        }));

    var createHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}