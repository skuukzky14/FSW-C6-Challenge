const { User } = require('../mongooseModels/index')
const { tokenSign,verifyToken } = require('../helper/jwt')
const { comparePassword } = require('../helper/bcryptjs')

const getRegister=async(req,res)=>{
    const { cookies } = req
    res.render('register', {loggedIn: cookies.login?true:false, role:cookies.login?.role})
}

const postRegister=async(req,res)=>{
    // const { cookies } = req
    // const { usernameRegister:username, firstnameRegister:firstname,lastnameRegister:lastname,passwordRegister:password, confirmPasswordRegister:confirmPassword} = req.body
    // const dataUser = {username,firstname,lastname,password}

    // if(password === confirmPassword){
    //     try {
    //         const postUser = await User.create(dataUser)
    //         console.log(postUser)
    //         res.render('login', {loggedIn: cookies.login?true:false, role:cookies.login?.role})
    //     } catch (error) {
    //         res.json({message:error})           
    //     }
    // }else{
    //     res.json({message:'password did not match'})
    // }
}

const login=async(req,res)=>{
    const { username, password } = req.body

    try {
        const user = await User.aggregate([
            { $match: {username:username}},
            { $lookup:{
                from:'userprofiles',
                localField:'_id',
                foreignField:'userId',
                as:'userProfile'
            }}
        ])
        const compare = comparePassword(password, user[0].password) 
        if(user[0] && compare){
            const token = tokenSign({email:user[0].email,_id:user[0]._id, role:user[0].role,userProfile:user[0].userProfile})
            res.cookie('login', {token, username, role:user[0].role} , 1)
            res.status(200).json({message:'login succeed', status:'succeed', redirected:'/'})
        }else{
            res.status(401).json({message:'username / password wrong!', status:'failed login'})  
        }

    } catch (error) {
        res.status(500).json({message:error})        
    }
}

const logout=(req,res)=>{
        res.clearCookie('login')
        res.status(200).json({message:'logout succeed', status:'succeed', redirected:'/'})
        res.end()
}



module.exports = {
    postRegister,getRegister,login,logout
}