import { useState } from "react";
import { countryAPI } from "@/app/services/api";
import { TemplateDirT } from "@/app/types/template";

export type SuccessResponseTemplateT = {
    result: boolean
    message: string
    data: TemplateDirT[]
}

export type ErrorResponseTemplateT = {
    result: false
    message: string
}

export default function useGetTemplate() {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState({} as ErrorResponseTemplateT)
    const [data, setData] = useState({} as SuccessResponseTemplateT)

    async function fetchTemplate(): Promise<SuccessResponseTemplateT | ErrorResponseTemplateT> {
        try {
            const result = await countryAPI.get('/test.php')
            if (result?.data?.length > 0) {
                return {
                    result: true,
                    message: '',
                    data: result.data
                }
            }
            return {
                result: false,
                message: '',
                data: result.data
            }
        } catch (err) {
            return {
                result: false,
                message: 'Something went wrong'
            }
        }
    }

    async function getTemplate(): Promise<void> {
        setLoading(true)
        setError({} as ErrorResponseTemplateT)
        const response = await fetchTemplate()
        if (!(response as ErrorResponseTemplateT)?.result) {
            setError(response as ErrorResponseTemplateT)
            setLoading(false)
            return
        }
        setData(response as SuccessResponseTemplateT)
        setLoading(false)
        setError({} as ErrorResponseTemplateT)
    }

    return {
        data,
        loading,
        error,
        getTemplate
    }
}