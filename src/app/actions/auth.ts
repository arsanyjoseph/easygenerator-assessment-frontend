'use server'
import { ApiService } from "@/utils/apiService"
import { SuccessLogin } from "@/types/auth";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookieManager";
import { User } from "@/types/user";

export const login = async ({ username, password }: { username: string, password: string }) => {
    const apiService = ApiService.getInstance()
    const response = await apiService.post<SuccessLogin>('/auth/login', { username, password })

    if (response.data.access_token) {
        await setCookie('accessToken', response.data.access_token)
        await setCookie('refreshToken', response.data.refresh_token)
        return response.data
    } else {
        return { access_token: null, refresh_token: null }
    }
}

export const getProfile = async (): Promise<User | null> => {
    try {
        const apiService = ApiService.getInstance()
        const token = await getCookie('accessToken')
        if (!token) return null
        apiService.setBearerToken(token?.value)
        const response = await apiService.get<User>('/auth/profile')
        if (response.data) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }
}

export const register = async ({ name, email, password, confirmPassword }: { name: string, email: string, password: string, confirmPassword: string }) => {
    try {
        const apiService = ApiService.getInstance()
        const response = await apiService.post('/user', { name, email, password, confirmPassword })
        if (response.data) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }
}

export const verify = async (verificationToken: string) => {
    try {
        const apiService = ApiService.getInstance()
        const response = await apiService.post<{ isVerified: boolean }>('/auth/verify-user', { verificationToken })
        if (response.data.isVerified) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }
}

export const logout = async () => {
    try {
        await deleteCookie('accessToken')
        await deleteCookie('refreshToken')
        return true
    } catch (error) {
        console.error(error)
        return null
    }
}