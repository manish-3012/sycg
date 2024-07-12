import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/options";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/login");
  // }
  
  return (
    <>
      <Hero/>
      <Camp/>
      <Guide />
      <Features/>
      <div id="get-app">
        <GetApp/>
      </div>
    </>
  );
}
