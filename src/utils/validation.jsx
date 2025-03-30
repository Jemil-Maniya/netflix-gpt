 export const dataValidator = ( email, password,) => {
    
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
   
    if(!isEmail) {return "Enter a validate Email"}
    if(!isPassword) {return "Enter a validate password"}

    else return console.log("null");
}