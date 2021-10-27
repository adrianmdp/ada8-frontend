import { useEffect, useState } from "react";

const Profile = () => {
  const [test, setTest] = useState(false);

  const [otroTest, setOtroTest] = useState(1);

  useEffect(() => {
    console.log("useEffect");
  }, [test, otroTest]);

  useEffect(() => {
    console.log("segundo useEffect");
  }, [otroTest]);

  return (
    <>
      <div>Profile</div>
      <button onClick={() => setTest(!test)}>Probar</button>

      <button onClick={() => setOtroTest(otroTest + 1)}>Sumar</button>
    </>
  );
};

export { Profile };
