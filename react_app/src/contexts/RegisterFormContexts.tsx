import { createContext, FC, PropsWithChildren, useContext, useState } from "react"

const RegisterContext = createContext({
    data: {
        name: '',
        fatherName: '',
        degree: ''
    },
    setData: (data: any) => { }
})
export const useRegisterContext = () => useContext(RegisterContext)
const RegisterProvider: FC<PropsWithChildren> = ({ children }: any) => {
    const [data, setData] = useState({
        name: '',
        fatherName: '',
        degree: ''
    })
    return (
        <RegisterContext.Provider value={{ data, setData }}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider