import { TypeSignupFormSchema } from "@/app/auth/signup/_components/schema";
import axios from 'axios'

export const signupRequest = async (data: TypeSignupFormSchema) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`
        const response = await axios.post(url, data)
        return response
    } catch (error) {
        throw error
    }
    
}