import { Skeleton } from "@mui/material";
import { useState } from "react";
import { FaAddressCard } from "react-icons/fa6";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";
import { useSelector } from "react-redux";
import AddressList from "./AddressList";
const Address = ({ address }) => {
  const { isLoading } = useSelector((state) => state.error);
  const noAddressExist = !address || address.length === 0;
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const addNewAddressHandler = () => {
    setSelectedAddress("");
    setOpenAddressModal(true);
  };

  return (
    <>
      {noAddressExist && !isLoading ? (
        <div className="flex flex-col gap-8 justify-center items-center h-[200px]">
          <div className="flex justify-center items-center">
            <FaAddressCard className="text-slate-800 text-3xl mr-2" />
            <span className="text-slate-800 text-lg font-medium">
              No address added yet
            </span>
          </div>
          <div className="">
            <button
              className="flex items-center bg-blue-800 text-white px-2 h-9 rounded-md text-sm"
              onClick={addNewAddressHandler}
            >
              Add Address
            </button>
          </div>
        </div>
      ) : (
        <div className="relative p-1 rounded-lg w-full mx-auto flex gap-4 flex-col">
          <h1 className="mb-2 text-slate-900  font-semibold text-2xl pl-22">
            Select address
          </h1>
          {isLoading ? (
            <>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </>
          ) : (
            <div className="flex flex-row flex-wrap max-w-full gap-8 justify-center">
              <AddressList
                addresses={address}
                setSelectedAddress={setSelectedAddress}
                setOpenAddressModal={setOpenAddressModal}
              />
            </div>
          )}
        </div>
      )}
      <AddressInfoModal
        isOpen={openAddressModal}
        setIsOpen={setOpenAddressModal}
      >
        <AddAddressForm
          address={selectedAddress}
          setOpenAddressModal={setOpenAddressModal}
        />
      </AddressInfoModal>
    </>
  );
};
export default Address;
