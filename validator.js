import {pool} from './db_connection.js'

export const auth = async (req, res) => {
    try {
        const {username,password} = req.body;

        //validating type
        if(typeof(username)!='string'){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Invalid username"
            })
        }

        //validating empty or not
        else if(username.length==0){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Username cannot be empty"
            })
        }

        //validating type
        if(typeof(password)==null){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Invalid Password"
            })
        }

        //validating empty or not
        else if(password.length==0){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Password cannot be empty"
            })
        }

        //matching username and password in db
        const tableQuery = `select * from auth where username = $1 and password = $2`
        const result = await pool.query(tableQuery,[username,password])
        if(result.rows.length == 0){
            return res.status(401).json({
                error:true,
                code:501,
                message:"Invalid username or password"
            })
        }
        return res.status(200).json({
            error:false,
            code:200,
            data:result.rows,
            message:"login successful"
        });
    }
    catch(e) {
        res.status(501).json({
            error:true,
            code:501,
            message:"login unsuccessful"
        })
    }
}