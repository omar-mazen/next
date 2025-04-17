import { redirect } from "next/navigation";

const page = () => {
  redirect("settings/update-account");
};

export default page;
