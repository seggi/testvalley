"use client";

import Image from "next/image";
import React from "react";
import { SWRResponse } from "swr";
import { Spinner } from "flowbite-react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import starIcon from "@/assets/icons/star.svg";
import formatNumber from "@/helpers/formatNumber";
import styles from "./Home.module.scss";

type Props = {
  collections: SWRResponse<any, any, any>;
};

const ItemRow = ({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: Array<Record<string, any>>;
}) => {
  const swiperRef = React.useRef<SwiperRef>(null);

  const handleNextSlide = () => {
    swiperRef.current?.swiper?.slideNext?.();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper?.slidePrev?.();
  };

  return (
    <div className={`${styles.itemsContainer} flex flex-row`}>
      <div className={`${styles.itemsCategory} flex flex-col`}>
        <div className="grow">
          <div className={`${styles.itemsCategoryTitle} line-clamp-2`}>
            {title}
          </div>
          <div className={`${styles.itemsCategorySubTitle} line-clamp-2`}>
            {subtitle}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <svg
            className="w-6 h-6 text-gray-400 dark:text-white cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={handlePrevSlide}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <svg
            className="w-6 h-6 text-gray-400 dark:text-white cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={handleNextSlide}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className={`${styles.itemsRow} flex flex-row overflow-x-auto`}>
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          {items?.map?.((item: Record<string, any>) => (
            <SwiperSlide
              key={item.uuid}
              className={`${styles.itemCard} mx-2.5`}
            >
              <Image
                src={item.publication?.media?.[0]?.uri as string}
                width={174}
                height={174}
                className=""
                alt={item.publication?.title as string}
                title={item.publication?.title as string}
              />
              {item.publication?.tagsOnImage?.[0] ? (
                <span className={`${styles.itemTagOnImage} block`}>
                  <span className="rounded ms-1 p-1">
                    {item.publication?.tagsOnImage?.[0]}
                  </span>
                </span>
              ) : null}
              <span className={`${styles.itemTitle} line-clamp-2 pt-4`}>
                {item.publication?.title}
              </span>
              <div>
                <span className={`${styles.discountRate}`}>
                  {item.publication?.priceInfo?.discountRate}%
                </span>
                <span className={`${styles.itemPrice}`}>
                  {formatNumber(item.publication?.priceInfo?.discountPrice)}
                </span>
                <span>원</span>
              </div>
              {item.publication?.tagsOnDesc?.[0] ? (
                <span className={`${styles.itemTagOnDesc} rounded mt-2 p-1`}>
                  {item.publication?.tagsOnDesc?.[0]}
                </span>
              ) : null}
              <div className={`${styles.itemRating} flex flex-row pt-2`}>
                <Image src={starIcon} alt="" />
                <span>{item.publication?.rating}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default function Collections({ collections }: Props) {
  const items = collections?.data?.items?.filter?.(
    (item: Record<string, any>) =>
      item.type === "SINGLE" && item.viewType === "TILE"
  );
  return (
    <div className="container">
      <div className="h-full">
        {collections?.isLoading ? (
          <div className="text-center">
            <Spinner aria-label="Loading..." />
          </div>
        ) : null}
        {!collections?.isLoading && !collections?.error ? (
          <ItemRow
            title="HOT DEAL"
            subtitle="[UP TO 34% OFF] HAPPY HOUR"
            items={items?.[0]?.items}
          />
        ) : null}
        {!collections?.isLoading && !collections?.error
          ? items
              ?.slice?.(1)
              ?.map?.((item: Record<string, any>) => (
                <ItemRow
                  title={item.title}
                  subtitle={item.subtitle}
                  key={item.id}
                  items={item?.items}
                />
              ))
          : null}
      </div>
    </div>
  );
}
