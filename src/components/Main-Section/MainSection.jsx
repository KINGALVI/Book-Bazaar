import { Outlet } from "react-router-dom";
import HeaderSection from "../Header-Section/HeaderSection";
import FooterSection from "../Footer-Section/FooterSection";

const Main = () => {

  return (
    <>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </>
  )

}

export default Main;