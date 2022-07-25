const { verifyToken } = require('../helper/jwt')

const adminCheck=(req,res,next)=>{
    const { cookies } = req

    const userData = verifyToken(cookies.login.token)
    if(userData.role === 'admin'){
        next()
    }else{
        res.render('404')
    }
}


module.exports = {
    adminCheck
}