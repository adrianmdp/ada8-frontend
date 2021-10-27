import { mapToArray } from "../../helpers";
import { api } from "../../utils";

const getJobOffers = async () => {
  const response = await api.get("/job-offers.json");

  return mapToArray(response.data);
};

export { getJobOffers };
