import { NavBar } from "../components/NavBar";
import { Products } from "../components/products";
import { SliderCorousal } from "../components/slider";

export default function Home() {
  return (
    <>
      <NavBar />
      <SliderCorousal />
      <Products />
    </>
  );
}
