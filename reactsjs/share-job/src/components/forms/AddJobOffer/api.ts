import { api } from "../../../utils";
import moment from "moment";
import { JobOffer } from "../../../types";

type Payload = Omit<JobOffer, "id">;

const addJobOffer = async (payload: Payload) => {
  const { date } = payload;

  const newDate = moment(date).format("DD-MM-YYYY");

  await api.post("/job-offers.json", { ...payload, date: newDate });

  // Otra opción
  //   await api.post("/job-offers.json", {
  //     ...payload,
  //     date: moment(payload.date).format("DD-MM-YYYY"),
  //   });
};

export { addJobOffer };
