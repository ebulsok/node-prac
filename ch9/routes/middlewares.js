exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.status(403).send('로그인 필요'); 
};

exports.isNotLoggedIn = (req,res, next) => {
    if (!req.isAuthenticated()) next();
    else {
        const msg = encodeURIComponent('로그인 한 상태입니다.');
        res.redirect(`/?error=${msg}`);
    }
}