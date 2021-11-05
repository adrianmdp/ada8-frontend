import { FC } from "react";
import { Layout } from "../../components";
import { WithAuth } from "../../hoc";

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
