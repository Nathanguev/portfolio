"use server"

import { Resend } from "resend"

const resend = new Resend("re_T3jQZcnE_CWpyeR2vTqLLaysR8ibDMoCE")

export type FormData = {
  name: string
  email: string
  message: string
}

export async function sendEmail(formData: FormData) {
  try {
    const { name, email, message } = formData

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nathan.guevara.pro@gmail.com",
      subject: `Contact Form: Message from ${name}`,
      html: `
        <div>
          <h2>New message from your portfolio contact form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
      reply_to: email,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}
