"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import SelectOption from "@/components/SelectOption";
import ProfilePicIcon from "@/assets/icons/default-profile-picture.svg";
import PenIcon from "@/assets/icons/pen.svg";

const options = ["option 1", "option 2", "option 3", "option 4", "option 5"];
const page = () => {
  const [gov, setGov] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  return (
    <div className="grid w-fit grid-cols-1 justify-items-start gap-5">
      <div className=" relative h-fit w-fit rounded-full border-2 border-primary-color">
        <ProfilePicIcon
          className="w-18 h-18 rounded-full"
          fill="white"
          stroke="black"
        />
        <div className=" absolute -bottom-1 -left-1 flex cursor-pointer items-center justify-center rounded-full bg-primary-color">
          <input
            type="file"
            accept="image/png, image/jpeg"
            style={{ opacity: "0" }}
            className=" absolute left-0 top-0 h-full w-full !cursor-pointer overflow-hidden opacity-0"
            title=""
          />
          <span className="p-2">
            <PenIcon className="w-3 h-3" />
          </span>
        </div>
      </div>
      <p className=" mt-5 justify-self-start text-medium font-semibold tracking-wider">
        عنوان العمل :
      </p>
      {/* address */}
      <div className="grid grid-cols-2 grid-rows-2 gap-5 md:grid-cols-3 md:grid-rows-1">
        <SelectOption
          selectedValue={gov}
          setSelectedValue={(gov) => setGov(gov)}
          label={"المحافظة"}
          options={options}
        />
        <SelectOption
          selectedValue={city}
          setSelectedValue={(city) => setCity(city)}
          label={"المدينة"}
          options={options}
          disable={!gov}
        />
        <div className=" col-start-1 col-end-3 min-w-72 md:col-start-3 md:col-end-4">
          <Input
            required={true}
            autoComplete="street-address"
            label="الشارع"
            value={street}
            setValue={(st) => setStreet(st)}
            disabled={!gov || !city}
          />
        </div>
      </div>
      <p className="mt-5  justify-self-start text-medium font-semibold tracking-wider">
        اكتب نبذة عنك :
      </p>
      <TextArea
        value={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ullam beatae accusamus laborum corporis. Ipsum ratione atque accusantium deserunt suscipit nesciunt, ducimus adipisci odit odio, vero consequuntur pariatur provident aspernatur."
        }
        placeholder="اكتب نبذة عنك..."
      />
      <Button
        additionalStyle={`justify-self-end mt-5`}
        onClick={() => console.log("update")}
      >
        تحديث
      </Button>
    </div>
  );
};

export default page;
