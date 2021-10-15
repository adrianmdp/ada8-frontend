import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";

const Dashboard: FC = () => {
  return (
    <>
      <Layout mainClass="dashboard">Este es el contenido de Dashboard</Layout>
      {/* <Link to="/users">Usuarios</Link> */}
      {/* </Layout> */}
    </>
  );
};

export { Dashboard };
