import { Banner } from "../../Types/banner";
import { getBanners } from "../../../Services/banners";
import BannersClient from "./banners-client";

export default async function Banners() {
  const banners: Banner[] = await getBanners();

  if (!Array.isArray(banners)) {
    console.error("Erro ao carregar banners:", banners);
    return <div>Erro ao carregar banners.</div>;
  }

  return <BannersClient banners={banners} />;
}
