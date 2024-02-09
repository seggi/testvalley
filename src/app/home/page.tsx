"use client";

import React from "react";
import useSWR, { SWRConfig, SWRResponse } from "swr";

import HomeComponent from "@/components/Home";

export default function HomePage(): React.ReactElement {
  const banners: SWRResponse<any, any, any> = useSWR(
    "https://api.testvalley.kr/main-banner/all",
    (url: string) => fetch(url).then((r) => r.json())
  );
  const shortcuts: SWRResponse<any, any, any> = useSWR(
    "https://api.testvalley.kr/main-shortcut/all",
    (url: string) => fetch(url).then((r) => r.json())
  );
  const collections: SWRResponse<any, any, any> = useSWR(
    "https://api.testvalley.kr/collections?prearrangedDiscount",
    (url: string) => fetch(url).then((r) => r.json())
  );
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <HomeComponent
        banners={banners}
        shortcuts={shortcuts}
        collections={collections}
      />
    </SWRConfig>
  );
}
