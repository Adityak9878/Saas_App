import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

// import { Collection } from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";

const Profile = async ({ searchParams }: SearchParamProps) => {
  // const page = Number(searchParams?.page) || 1;
  // const { userId } = auth();

  // if (!userId) redirect("/sign-in");

  // const user = await getUserById(userId);
  // const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <Header title="Profile" />
      
    </>
  );
};

export default Profile;