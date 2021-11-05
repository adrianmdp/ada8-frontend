import React, { FC, useEffect, useState } from "react";
import { JobOffer } from "../../types";
import { getJobOffers } from "../JobOffers/api";

const Profile: FC = () => {
  const [test, setTest] = useState(false);

  const [cont, setCont] = useState(1);

  const [offers, setOffers] = useState<JobOffer[] | undefined>(undefined);

  // useEffect(() => {}, [])

  useEffect(() => {
    console.log("Hola useEffect en profile depende solo de cont");
  }, [cont]);

  useEffect(() => {
    console.log("Hola useEffect en profile depende solo de test");
  }, [test]);

  useEffect(() => {
    console.log("Hola useEffect en profile depende de test y de cont");
  }, [test, cont]);

  useEffect(() => {
    getJobOffers().then((response) => {
      setOffers(response);
    });
  }, []);

  console.log(offers);

  return (
    <>
      <div>Profile</div>

      <ul>
        {offers?.map((offer) => (
          <li key={offer.title + offer.date}>
            <h2>{offer.title}</h2>
          </li>
        ))}
      </ul>

      <button onClick={() => setTest(!test)}>Probar</button>

      <button onClick={() => setCont(cont + 1)}>Sumar</button>
    </>
  );
};

export { Profile };
