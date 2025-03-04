import axios, { AxiosInstance } from 'axios'

export class ApiService {
    private static instance: ApiService;
    private axiosInstance: AxiosInstance;
    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.API_BASE_URL
        })
    }

    public static getInstance(): ApiService {
        if (!this.instance) this.instance = new ApiService()
        return this.instance
    }

    public setBearerToken(token: string) {
        this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    public get = <T>(url: string, config?: object) => this.axiosInstance.get<T>(url, config)
    public post = <T>(url: string, data?: object, config?: object) => this.axiosInstance.post<T>(url, data, config)
    public put = <T>(url: string, data?: object, config?: object) => this.axiosInstance.put<T>(url, data, config)
    public patch = <T>(url: string, data?: object, config?: object) => this.axiosInstance.patch<T>(url, data, config)
    public delete = <T>(url: string, config?: object) => this.axiosInstance.delete<T>(url, config)
}

