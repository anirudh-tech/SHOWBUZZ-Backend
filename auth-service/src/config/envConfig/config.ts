import {config} from 'dotenv'
config()
let EMAIL : string  = String(process.env.EMAIL)
let PASSWORD : string  = String(process.env.PASSWORD)

export {
    EMAIL,
    PASSWORD,
}