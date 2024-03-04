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