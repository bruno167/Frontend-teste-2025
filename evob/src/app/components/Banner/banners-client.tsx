"use client";

import { useEffect, useState } from "react";
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
  const [cachedBanners, setCachedBanners] = useState<Banner[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (banners.length > 0) {
      localStorage.setItem("cachedBanners", JSON.stringify(banners));
      setCachedBanners(banners);
    } else {
      const cached = localStorage.getItem("cachedBanners");
      if (cached) {
        setCachedBanners(JSON.parse(cached));
      }
    }
  }, [banners]);

  return (
    <StyledBanner>
      {cachedBanners.map((banner) => (
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
