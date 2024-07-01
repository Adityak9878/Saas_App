import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";

const Credits = async () => {
  // const { userId } = auth();

  // if (!userId) redirect("/sign-in");

  // const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

     
    </>
  );
};

export default Credits;