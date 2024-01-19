var jwt = require('jsonwebtoken');
const jwt_secrt = "Tushar@boigreat";


const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
    try{
        const data = jwt.verify(token,jwt_secrt);
        req.user = data.user;
        next();
    }catch(error){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
}

module.exports = fetchuser; 