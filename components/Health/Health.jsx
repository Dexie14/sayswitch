"use client";
import React from "react";

import { useGetingHealth } from "@/hooks/useHealthGet";
import { Spinner } from "../Spinner";
import moment from "moment";

const Health = () => {
  const { data: health , isLoading} = useGetingHealth();

  // console.log(health, "ddd");
  return (
    <div className="h-[100%]">
      <section className="flex justify-between mb-5">
        <h1 className="text-2xl text-dark" style={{ fontFamily: "DMSans" }}>
          Health Overview
        </h1>
      </section>

        <table className=" w-full table-auto tabling">
        <thead className="text-left mb-3 border-b-4">
          <tr className="bg-secondary px-3">
            <th className=" text-sm font-semibold text-[#333333] py-4 pl-2 ">
              Terminal ID
            </th>
            <th className=" text-sm font-semibold text-[#333333]">
              Serial Number
            </th>
            <th className=" text-sm font-semibold text-[#333333]">
              App Version
            </th>
            <th className=" text-sm font-semibold text-[#333333]">
              Terminal Type
            </th>
            <th className=" text-sm font-semibold text-[#333333]">Printer Status </th>
            <th className=" text-sm font-semibold text-[#333333]">Battery Level</th>
            <th className=" text-sm font-semibold text-[#333333]">
              Date Time
            </th>
          </tr>
        </thead>
        {isLoading ? (
          <Spinner />
        ) : 
        health ? (
          <tbody className="bg-white cursor-pointer  ">
            {Array.isArray(health) && health?.length > 0 ? (
              health?.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b-4"
                  style={{
                    boxShadow: "0px 2px 2px 0px rgba(34, 34, 34, 0.10);",
                  }}
                >
                  <td className="text-sm font-normal text-[#333333] pl-2 py-4">
                    {item?.terminalId}
                  </td>
                  <td className="text-sm font-normal text-[#333333]">
                    {item?.serialNumber}
                  </td>
                  <td className="text-sm font-normal text-[#333333]">
                    {item?.appVersion}
                  </td>
                  <td className="text-sm font-normal text-[#333333]">
                    {item?.terminalType}
                  </td>
                  <td className="text-sm font-normal text-[#333333]">
                    {item?.printerStatus}
                  </td>
                  <td className="text-sm font-normal text-[#333333]">
                    {item?.batteryLevel}
                  </td>
                  <td className="text-sm font-normal text-[#333333]">
                    {/* {moment(item?.dateTime).format("MMMM Do YYYY, h:mm a")} */}
                    {item?.dateTime}
                  </td>
                </tr>
              ))
            ) : (
              <p className="my-10 text-center ">No data available</p>
            )}
          </tbody>
        ) : (
          <p>no data available</p>
        )}
      </table>
    </div>
  );
};

export default Health;
