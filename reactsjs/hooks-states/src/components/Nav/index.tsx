import { Dispatch, FC } from "react"
import { Page } from '../../App'

import './styles.scss'

type Props = {
    page: string
	 onChangePage: Dispatch<Page>
}

const Nav: FC<Props> = ({ page, onChangePage }) => {

    return (
        <nav className="nav-primary">
            Estas en: { page }
            <ul>
                <li>
                    <button type="button" onClick={() => onChangePage('home')}>Home</button>
                </li>
                <li>
                    <button type="button" onClick={() => onChangePage('services')}>Servicios</button>
                </li>
                <li>
                    <button type="button" onClick={() => onChangePage('locations')}>Sucursales</button>
                </li>
                <li>
                    <button type="button" onClick={() => onChangePage('contact')}>Contacto</button>
                </li>
                <li>
                    <button type="button" onClick={() => onChangePage('login')}>Login</button>
                </li>
            </ul>
        </nav>
        // <nav>
        //     <ul>
        //         <li>
        //             <button type="button" onClick={() => setPage('home')}>Home</button>
        //         </li>
        //         <li>
        //             <button type="button" onClick={() => setPage('services')}>Servicios</button>
        //         </li>
        //         <li>
        //             <button type="button" onClick={() => setPage('locations')}>Sucursales</button>
        //         </li>
        //         <li>
        //             <button type="button" onClick={() => setPage('contact')}>Contacto</button>
        //         </li>
        //         <li>
        //             <button type="button" onClick={() => setPage('login')}>Login</button>
        //         </li>
        //     </ul>
        // </nav>
    )

}

export { Nav }