import { API_BASE_URL } from "@/fsd/shared/config";
import axios from "axios";
import { FormType } from "../model/types";

type GetPeopleType = {
  formData: FormType;
  abortSignal: AbortSignal;
};

export const getPeople = async ({ formData, abortSignal }: GetPeopleType) => {
  const response = await axios.get(`${API_BASE_URL}/search`, {
    params: {
      ...formData,
    },
    signal: abortSignal,
  });

  return response.data;
};
