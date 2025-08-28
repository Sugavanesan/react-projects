import axios from "axios";
import { useCallback, useEffect, useState } from "react"
const Api = axios.create({
    'url': 'https://jsonplaceholder.typicode.com'
})
const fetchData = async () => {
    try {
        const response = await Api.get('https://jsonplaceholder.typicode.com')
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const useGetData = ({ name }: { name: string }) => {
    const [data, setData] = useState<any>('loading')
    useEffect(() => {
        console.log('hook mount')

    }, [])
    const FetchData = useCallback(() => {
        return new Promise((resolve, reject) => {
            Api.get('https://jsonplaceholder.typicode.com')
                .then((res) => {
                    console.log('test res-->', res)
                    setData(res)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }, [])
    // useEffect(() => {
    //     const getData = fetchData()
    //     getData.then((res) => {
    //         console.log('tets res-->', res)
    //         setData(res)
    //     })
    // }, [])
    return {
        FetchData,
        data
    }
}