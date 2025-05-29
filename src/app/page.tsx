import Collections from "@components/Collections/Collections";
import Account from "@components/Account/Account";
import CustomerSlider from "@components/Slider/CustomerSlider";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Collections />
      <Account />
      <CustomerSlider />
    </main>
  );
};

export default Home;
