import { useState } from "react"

const Services = () => {

    const [value, setValue] = useState("Adrian")

    let height = 10

    const handleClick = () => {
        setValue("Mati")
        height = 20;
    }


    return (

        <div>
            Services

            <h2>
                { value }
            </h2>

            <h2>
                { height }
            </h2>

            <button onClick={handleClick} >Cambiar</button>
        </div>

    )

}

export { Services }