import React, { useState } from "react";

interface CustomTabProps {
  tabs: Array<string>;
  className?: string;
}
const CustomTab = ({ tabs, className }: CustomTabProps) => {
  const [contentMap, setContentMap] = useState({});

  const maps = {};

  return (
    <>
      <div className={`flex ${className}`}>
        {tabs?.map((tab) => (
          <div className="flex gap-20">
            <h2 className="bg-gray-50  border-2 rounded-xl shadow-sm w-full text-gray-700 text-center font-bold px-1 pb-2">
              {tab}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomTab;
