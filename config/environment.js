import dotenv from 'dotenv'
dotenv.config()

export const port = process.env.PORT || 4000
export const dbURI = process.env.DB_URI
export const secret = process.env.SECRET || 'What is small but can climb a tower?'