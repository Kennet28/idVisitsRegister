import type { APIRoute } from "astro"
import { Resend } from "resend"
const apikey = import.meta.env.RESEND_API_KEY
const resend = new Resend(apikey)
export const GET:APIRoute = async ({params, request}) =>{
    console.log({params, request})
    const body = await request.json()
    const {name, email, date, motive} = body
    
    const send = await resend.emails.send({
        from: "no-reply@idenrollvisits.com",
        to:email,
        subject:`Confirm your visit`,
        html:"<h1>Hi, you preregister to visit<h2>",
        text:`Hi, preregister to visit, here your url to confirm visit: http://localhost:4321/confirm?name=${name}&email=${email}&date=${date}&motive=${motive}`
    })
    if (!send.error) {
        return new Response(JSON.stringify({
            message: "Email was not sent"
        }))
    }

    return new Response(JSON.stringify({
        message: "Email was sent"
    }))
} 