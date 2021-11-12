import { FC, useEffect, useState } from "react";
import { JobOffer } from "../../types";
import { getJobOffers } from "./api";
import { Card } from "../../components/common";
import { WithAuth } from "../../hoc";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

const JobOffersPage: FC = () => {
  const [offers, setOffers] = useState<JobOffer[]>();

  const { logout } = useAuth();

  useEffect(() => {
    getJobOffers().then((response) => {
      setOffers(response);
    });
  }, []);

  return (
    <>
      <button onClick={logout}>Cerrar sesión</button>
      <h1 className="title">Ofertas de trabajo</h1>

      <div className="cards-wrapper">
        {offers?.map((offer) => (
          <Card title={offer.title}>{offer.description}</Card>
        ))}

        <Link to="/login">Ir a Login</Link>
      </div>
    </>
  );
};

export const JobOffers = WithAuth(JobOffersPage);
