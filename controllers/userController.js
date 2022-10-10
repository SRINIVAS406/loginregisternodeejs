import UserModel from '../models/User.js'

class UserController {
    static home = (req, res) =>{
        res.render("index")
    }
    static registration = (req, res) =>{
        res.render("registration")
    }

    static createUserDoc = async (req,res)=>{

        try{
            //creating new document using new model
            const doc = new UserModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            
            console.log(req.body);

            //Saving document
            await doc.save()
            res.redirect('/login')
        }catch(err){
            console.log("ERROR FROM UserControler: "+err);
        }
    }

    static login = (req, res) =>{
        res.render("login")
    }
}

export default UserController