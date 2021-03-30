const DEV = process.env.NODE_ENV !== 'production'

export const server = DEV ? 'http://localhost:3000' : 'https://tenjack.com'
