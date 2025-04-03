import apiClient from "./apiClient";
import { CoursesResponse, Course } from "../app/Types/course";

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await apiClient.get<CoursesResponse>("/courses");

    console.log("Dados da API (Cursos):", response.data);

    if (response.data?.courses && Array.isArray(response.data.courses)) {
      return response.data.courses;
    } else {
      console.warn("A resposta da API não contém os cursos esperados.", response.data);
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return [];
  }
};
