import { Course } from "@/app/Types/course";
import apiClient from "./apiClient";

export const getCourseDetails = async (courseSlug: string): Promise<Course | null> => {
  const endpoint = `/courses/${courseSlug}`;
  console.log("Chamando API com endpoint:", endpoint);

  try {
    const response = await apiClient.get<Course>(endpoint);
    console.log("Dados do curso retornados com sucesso:", response.data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error(
        `Erro na API - Código ${error.response.status}:`,
        error.response.data || "Sem detalhes adicionais."
      );
    } else if (error.request) {
      console.error("Erro de conexão. Sem resposta da API:", error.request);
    } else {
      console.error("Erro desconhecido ao configurar requisição:", error.message);
    }
    return null; 
  }
};
