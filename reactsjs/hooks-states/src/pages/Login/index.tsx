import {FormEvent } from "react"
import { Header } from "../../components";
import { useAuth } from "../../hooks"

const Login = () => {

    const { isLogged, login } = useAuth();

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        login('asd@asd.com', 'asd123');
    }

    console.log('Login', isLogged)

    return (

        <div>
            <Header isLogged={isLogged} />

            {isLogged ? 'Hay una sesión activa' : 'No hay sesión'}

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="text" name="pass" />
                </div>
                <button type="submit">Enviar</button>
            </form>

        </div>

    )

}

export { Login }