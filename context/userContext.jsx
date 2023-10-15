import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext({})
export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (!user) {
            axios.get("https://quran-app-backend.vercel.app/api/v1/profile").then(({ data }) => {
                setUser(data)
            })
        }
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}