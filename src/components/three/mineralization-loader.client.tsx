"use client";

import dynamic from "next/dynamic";

const MineralizationExperience = dynamic(
  () =>
    import("./mineralization-experience.client").then(
      (module) => module.MineralizationExperience,
    ),
  {
    ssr: false,
    loading: () => <div className="mineral-canvas mineral-canvas--fallback" />,
  },
);

export function MineralizationLoader() {
  return <MineralizationExperience />;
}
