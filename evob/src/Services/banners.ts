import apiClient from "./apiClient";
import { Banner } from "../app/Types/banner";

export const getBanners = async (): Promise<Banner[]> => {
  try {
    const response = await apiClient.get("/banners");

    
    if (response.data && Array.isArray(response.data.banners)) {
      return response.data.banners;
    } else {
      console.warn("A resposta da API não contém banners esperados:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar banners:", error);
    return [];
  }
};
