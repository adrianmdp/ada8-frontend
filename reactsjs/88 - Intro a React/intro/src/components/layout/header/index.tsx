import React from "react";

type PropsHeader = {
  title: string;
};

const personas = ["Adrian", "Mati"];

function getTimeZone() {
  return "Zona horaria";
}

export const Algo = () => {
  return <div>Esto tiene algo dentro</div>;
};

const Header = () => {


  getTimeZone();
  return (
    <header>
      <Algo />
      Header
    </header>
  );
};

export default Header;
