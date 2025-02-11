
import React from "react";

export default function CulturalCard({ img }) {
  return <div className="w-[315px]  border-2 border-gray-900 relative overflow-hidden rounded-2xl">
<img className="z-10 h-[500px]" src={`/gallary/${img}.jpg`} alt={`${img}`}  />
<div className="absolute  z-50">reception</div>

  </div>;
}