import { Schema, model,models } from "mongoose";



const userSchema = new Schema({
email:{
    type: String,
    unique: true,
    required: true,
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "email no es valido"]    },
passwords:{
    type: String,
    required: [true, "password requerido"],
    select: false
},
fullname:{
    type: String,
    required: [true, "nombre requerido"],
    minLength:[3, "nombre de al menos 3 caracteres"],
    maxLength:[20, "nombre no mas de  20 caracteres"]
}


});
const User= models.User|| model("User",userSchema)
export default User