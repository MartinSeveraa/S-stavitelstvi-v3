import Hero from "../components/Hero/Hero.tsx";
import Usp from "../components/Usp/Usp.tsx";
import Header from "../components/Header/Header.tsx";
import Company from "../components/aboutCompany/Company.tsx";
import Cta from "../components/Cta/Cta.tsx";


export default function Home() {
  return (
    <div className="size-full bg-white">
      <Header/>
      <Hero/>
      <Usp/>
      <Company/>
      <Cta/>
    </div>
  );
}