import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CatalogContainer from "./components/CatalogContainer";
import ShelfContainer from "./components/ShelfContainer";

export default function Page() {
  const [route, setRoute] = useState("catalog");

  return (
    <>
      <Header route={route} setRoute={setRoute} />
      {route === "catalog" && <CatalogContainer setRoute={setRoute} />}
      {route === "shelf" && <ShelfContainer setRoute={setRoute} />}
      <Footer />
    </>
  );
}
