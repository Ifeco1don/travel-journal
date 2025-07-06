import Header from "./assets/components/Header";
import Entry from "./assets/components/Entry";
import data from "./assets/data";

export default function App() {
  const mapData = data.map((one) => {
    return <Entry key={one.id} one={one} />;
  });
  return (
    <>
      <Header />
      <div className="container">{mapData}</div>
    </>
  );
}
