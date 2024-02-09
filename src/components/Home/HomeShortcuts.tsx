"use client";

import Link from "next/link";
import Image from "next/image";

import React from "react";
import { SWRResponse } from "swr";

type Props = {
  shortcuts: SWRResponse<any, any, any>;
};

export default function HomeShortcuts({ shortcuts }: Props) {
  return (
    <div className="container flex flex-row items-center justify-evenly py-12">
      {!shortcuts?.isLoading && !shortcuts?.error
        ? shortcuts?.data?.map?.((item: Record<string, number | string>) => (
            <Link
              key={item.mainShortcutId}
              href="#"
              className="flex flex-col items-center px-3"
            >
              <Image
                src={item.imageUrl as string}
                width={62}
                height={62}
                alt={item.title as string}
                title={item.title as string}
              />
              <span className="pt-2">{item.title}</span>
            </Link>
          ))
        : null}
    </div>
  );
}
