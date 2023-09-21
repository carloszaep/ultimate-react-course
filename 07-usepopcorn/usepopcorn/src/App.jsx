import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import WatchedBox from "./WatchedBox";





export default function App() {




  return (
    <>
      <Navbar />

      <main className="main">
        <SearchBox />
        <WatchedBox />
      </main>
    </>
  );
}
