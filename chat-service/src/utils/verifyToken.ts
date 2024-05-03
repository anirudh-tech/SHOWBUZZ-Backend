import jwt from 'jsonwebtoken'
export const verifyToken = (token: string) => {
    return jwt.verify(token, String(process.env.ACCESS_TOKEN_SECRET), (error, decoded) => {
        if (error) {
            throw new Error(error.message);
        } else {
            console.log(decoded,'----=====----')
            return decoded 
        }
    })
}


// function f(x) {
//     x= "x-" + x;
//     return function (y) {
//         y =  "y-" + x;
//         return function(z) {
//             return "z-" + 
//         }
//     }
// }