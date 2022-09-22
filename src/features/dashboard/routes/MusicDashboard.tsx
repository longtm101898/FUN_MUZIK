import React, { useRef, useState } from "react";
import { ContentLayout } from "@/components/Layout/ContentLayout";
import { MusicContainer } from "../components/MusicContainer";
import { MusicLibrary } from "../components/MusicLibrary";
import data from "@/data";

export const MusicDashboard = () => {
  const [idx, setIdx] = useState(0);
  const oldIdx = useRef(idx);

  return (
    <ContentLayout title="Funny Muzik" description="Olympe">
      <div className="grid grid-cols-6">
        <div className="col-start-1">
          <MusicLibrary idx={idx} musicData={data} setIdx={setIdx} />
        </div>
        <MusicContainer
          idx={idx}
          oldIdx={oldIdx}
          musicData={data}
          className="col-span-4 col-start-3 col-end-6 pt-12"
          setIdx={setIdx}
        />
      </div>
    </ContentLayout>
  );
};
