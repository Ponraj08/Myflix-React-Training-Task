import Cards from "../components/Cards";
import Navbar from "../components/navbar";
import { Overall_genre } from "../datas/gunerlist";

import "../App.css"

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-cards">
        {Overall_genre.map((genres) => (
          <Cards tabledata={genres} />
        ))}
      </div>

    </>
  );
}

export default Dashboard;
