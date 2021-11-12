import { User } from "../../components/common/User";
import { Login } from "../../components/forms";
import { WithAuth } from "../../hoc/withAuth";

const UsersPage = () => {
  return (
    <>
      Users
      <div className="row">
        <div className="col-md-4">
          <User name="Adrian" />
        </div>
        <div className="col-md-4">
          <User name="Melisa" />
        </div>

        <div className="col-md-4">
          <User name="Mati" />
        </div>
        <div className="col-md-4">
          <User name="Eze" />
        </div>

        <div className="col-md-4">
          <User name="Sabri" />
        </div>

        <div className="col-md-4">
          <User name="John" />
        </div>
      </div>
    </>
  );
};

export const Users = WithAuth(UsersPage);
