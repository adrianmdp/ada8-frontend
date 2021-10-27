import { useEffect, useState } from "react";
import { JobOffer } from "../../types";
import { getJobOffers } from "./api";

const JobOffers = () => {
  const [offers, setOffers] = useState<JobOffer[]>();

  useEffect(() => {
    getJobOffers().then((response) => {
      setOffers(response);
    });
  }, []);

  return (
    <>
      <h1>Ofertas de trabajo</h1>

      <ul>
        {offers?.map((offer) => (
          <li>
            <a href="/asd">{offer.title}</a>
            <p>{offer.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export { JobOffers };
