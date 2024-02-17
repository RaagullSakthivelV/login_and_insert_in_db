import {pool} from './db_connection.js'


export const insertdata = async (req, res) => {
    try {
        const {name,age,city} = req.body;

        //validating type
        if(typeof(name)!='string'){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Invalid name"
            })
        }

        //validating length
        else if(name.length==0){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Username cannot be empty"
            })
        }

        //validating type
        if(typeof(age)!='number'){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Invalid age"
            })
        }

        //validating length
        else if(city.length==0){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Age cannot be empty"
            })
        }

        //validating type
        if(typeof(city)!='string'){
            return res.status(401).json({
                error:true,
                code:401,
                message:"Invalid City"
            })
        }

        //validating length
        else if(city.length==0){
            return res.status(401).json({
                error:true,
                code:401,
                message:"city cannot be empty"
            })
        }
        
        //inserting values in db
        const tableQuery = `insert into details(name,age,city) values($1,$2,$3)`
        const result = await pool.query(tableQuery,[name,age,city])
        return res.status(200).json({
            error:false,
            code:200,
            message:"Inserted successfully"
        });
    }
    catch(e) {
        res.status(501).json({
            error:true,
            code:501,
            message:"Insertion failed"
        })
    }
}