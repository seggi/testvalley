"use client";

import React from "react";
import { SWRResponse } from "swr";

import chatIcon from "@/assets/icons/chat.png";
import HomeBanner from "./HomeBanners";
import HomeShortcuts from "./HomeShortcuts";
import Collections from "./Collections";
import styles from "./Home.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {
  banners: SWRResponse<any, any, any>;
  shortcuts: SWRResponse<any, any, any>;
  collections: SWRResponse<any, any, any>;
};

export default function Home({ banners, shortcuts, collections }: Props) {
  return (
    <div className={styles.Home}>
      <HomeBanner banners={banners} />
      <HomeShortcuts shortcuts={shortcuts} />
      <Collections collections={collections} />
      <Link href="#" className="fixed bottom-12 right-5">
        <Image src={chatIcon} width={48} height={48} alt="" />
      </Link>
    </div>
  );
}
