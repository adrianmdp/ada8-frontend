import { FC, useEffect, useState } from "react";
import { JobOffer } from "../../types";
import { getJobOffers } from "./api";
import { Card } from "../../components/common";

const JobOffers: FC = () => {
  const [offers, setOffers] = useState<JobOffer[]>();

  useEffect(() => {
    getJobOffers().then((response) => {
      setOffers(response);
    });
  }, []);

  return (
    <>
      <h1 className="title">Ofertas de trabajo</h1>

      <div className="cards-wrapper">
        {offers?.map((offer) => (
          <Card title={offer.title}>{offer.description}</Card>
        ))}
      </div>
    </>
  );
};

export { JobOffers };
