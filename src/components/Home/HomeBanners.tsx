"use client";

import Image from "next/image";
import React from "react";
import { SWRResponse } from "swr";
import { Carousel, Spinner } from "flowbite-react";
import "swiper/css";

type Props = {
  banners: SWRResponse<any, any, any>;
};

export default function HomeBanners({ banners }: Props) {
  return (
    <div>
      <div className="h-96">
        {banners?.isLoading ? (
          <div className="text-center">
            <Spinner aria-label="Loading..." />
          </div>
        ) : null}
        <Carousel pauseOnHover>
          {!banners?.isLoading && !banners?.error
            ? banners?.data?.map?.((item: Record<string, number | string>) => (
                <Image
                  key={item.mainBannerId}
                  src={item.pcImageUrl as string}
                  width={960}
                  height={320}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={item.title as string}
                  title={item.title as string}
                />
              ))
            : null}
        </Carousel>
      </div>
    </div>
  );
}
