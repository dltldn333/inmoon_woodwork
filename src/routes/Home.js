import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import FirstMainCompo from "../components/main/FirstMainCompo";
import SecondMainCompo from "../components/main/SecondMainCompo";

function Home() {
  const [currentPage, setCurrentPage] = useState();
  const handlePageChange = (number) => {
    setCurrentPage(number);
    if (currentPage > 0) {
    }
  };

  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <FirstMainCompo />
        <SecondMainCompo />
      </ReactPageScroller>
    </>
  );
}

export default Home;
