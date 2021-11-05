import { useState } from "react";

const useAccount = () => {
  const [salario, setSalario] = useState<number>(0);

  const agregarVale = (value: number) => {
    // setSalario((prevState) => {

    //     return prevState + value

    // })

    setSalario((prevState) => prevState + value);
  };

  const descontarVale = (value: number) => {
    setSalario((prevState) => prevState - value);
  };

  const obtenerSueldo = () => {
    return salario;
  };

  return { agregarVale, descontarVale, obtenerSueldo };
};

export { useAccount };
