import { FC } from "react";
import { AddUsers } from "../../components/forms";
import { UsersTable } from "../../components/parts";

const Users: FC = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <UsersTable />
          </div>
          <div className="col-md-6">
            <AddUsers />
          </div>
        </div>
      </div>
    </>
  );
};

export { Users };
