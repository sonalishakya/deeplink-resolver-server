'use server'

import { redirect } from "next/navigation"

export async function selectTemplate(form: FormData) {
  console.log("Selected Template: ", form.get("templateId"))
  redirect(`/template/2/${form.get("templateId")}`,)
}