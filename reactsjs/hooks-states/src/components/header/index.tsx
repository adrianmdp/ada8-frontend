import { FC } from "react"
import { useAuth } from "../../hooks"

type Props = {
    isLogged: boolean
}

const Header: FC<Props> = ({isLogged}) => {

    const { isLogged: qwe, logout } = useAuth()

    const handleClick = () => {
        logout()
    }

    console.log('isLoggedDeHeader', qwe)
    console.log('Header', isLogged)

    return (

        <header>
            Header
            <button type="button" onClick={handleClick}>Cerrar sesión</button>
        </header>

    )

}

export { Header }