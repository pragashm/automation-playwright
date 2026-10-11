import 'dotenv/config';

console.log(process.env.BASE_URL);

export const env = {
    baseURL: process.env.BASE_URL,
    userName: process.env.USERNAME ?? "",
    password: process.env.PASSWORD ?? ""

}