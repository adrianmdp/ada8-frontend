import { useState } from "react";

const useAuth = ()  => {

    const [isLogged, setIsLogged] = useState(false)

    const login = (email: string, password: string) => {
        console.log(`Intento de login de ${email} con el pass ${password}`);
        setIsLogged(true);
    }

    const logout = () => {
        console.log('Cerrar sesión');
        setIsLogged(true);
    }

    const resetPassword = () => {
        console.log('Reset password');
    }

    const refreshToken = () => {
        console.log('Refresh token');
    }

    return { isLogged, login, logout, resetPassword, refreshToken }
}

export { useAuth }