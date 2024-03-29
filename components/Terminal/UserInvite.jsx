import { useState } from "react";
import Button from "../Comps/Button";

import { useAdminInvite } from "@/hooks/useAdminInvite";

import { useGetAdminMerch } from "@/hooks/useAdminMerch";

const UserInvite = ({ setModalIsOpen, modalIsOpen }) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const [email, setEmail] = useState("")
  
  const [merchName, setMerchName] = useState("");
  const { mutate: InviteAdmin, isPending } = useAdminInvite();

  const createInvite = () => {
    InviteAdmin({ email, handleCloseModal, merchName })
  }

  const { data: name,  } = useGetAdminMerch();
  
  

  return (
    <div className="py-4 px-6 rounded-[40px] ">
      <section className="flex justify-between pb-3 border-b-2 border-[#828282]">
        <h3 className="text-xl font-semibold">Invite Users</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className="cursor-pointer"
          onClick={handleCloseModal}
        >
          <g clip-path="url(#clip0_2_4170)">
            <path
              d="M15 13.2324L21.1875 7.04492L22.955 8.81242L16.7675 14.9999L22.955 21.1874L21.1875 22.9549L15 16.7674L8.81254 22.9549L7.04504 21.1874L13.2325 14.9999L7.04504 8.81242L8.81254 7.04492L15 13.2324Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_4170">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>
      <section className="my-10">
        <div className="mb-5 flex flex-col">
          <label
            htmlFor="email"
            className="text-sm  font-semibold text-[#333333] mb-1"
          >
            Email
          </label>
          <input
         onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="text-sm rounded-lg px-3 bg-[#f2f2f2] py-3 border border-border placeholder:text-border"
            type="email"
            placeholder="Enter Email to invite"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label
            htmlFor="merchant"
            className="text-sm  font-semibold text-[#333333] mb-1"
          >
            Merchant Name
          </label>
          <select onChange={(e) => setMerchName(e.target.value)} className="mb-5 text-sm rounded-lg px-3 py-3 bg-[#f2f2f2] border border-border outline-none">
            <option selected disabled>
              Select Merchant Name
            </option>
            {name?.items?.map((item) => {
              return <option>{item?.name}</option>;
            })}
          </select>
        </div>
        <Button
          onClick={createInvite}
          className="w-full px-3 py-2"
        >
          {isPending ? "Sending" : "Send"}
        </Button>
      </section>
    </div>
  );
};

export default UserInvite;
