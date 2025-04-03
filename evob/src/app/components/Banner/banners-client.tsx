"use client";

import { Banner } from "@/app/Types/banner";
import {
  HighlightArea,
  StyledBanner,
  StyledBannerArea,
  StyledBannerTitle,
} from "./banner.styles";
import { useRouter } from "next/navigation";
import { BannerButton } from "../Button/button.styles";

export default function BannersClient({ banners }: { banners: Banner[] }) {
  const router = useRouter();

  return (
    <StyledBanner>
      {banners.map((banner) => (
        <StyledBannerArea
          key={banner.id}
          $srcdesktop={banner.desktop}
          $srcmobile={banner.mobile}
        >
          <HighlightArea />
          <StyledBannerTitle>{banner.description}</StyledBannerTitle>
          <BannerButton onClick={() => router.push(banner.target)}>
            Conheça as aulas
          </BannerButton>
        </StyledBannerArea>
      ))}
    </StyledBanner>
  );
}
