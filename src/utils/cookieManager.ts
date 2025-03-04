'use server'
import { cookies } from 'next/headers'

export async function setCookie(key: string, value: string) {
    const cookieStore = await cookies()

    cookieStore.set({
        name: key,
        value,
        expires: new Date(Date.now() + 60 * 60 * 24 * 30),
    })
}

export async function getCookie(key: string) {
    const cookieStore = await cookies()

    return cookieStore.get(key)
}

export async function deleteCookie(key: string) {
    const cookieStore = await cookies()

    cookieStore.delete(key)
}