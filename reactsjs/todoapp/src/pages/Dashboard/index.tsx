import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { WithAuth } from "../../hoc";
import { useAuth } from "../../hooks";

const Dashboard: FC = () => {
  return (
    <>
      <Layout mainClass="dashboard">Este es el contenido de Dashboard</Layout>
      {/* <Link to="/users">Usuarios</Link> */}
      {/* </Layout> */}
    </>
  );
};

export const DashboardPage = WithAuth(Dashboard);
