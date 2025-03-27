import { useLocation } from "react-router-dom";
import { IOverall_genre } from "../datas/genrelist";
import Navbar from "../components/navbar";

const Table: React.FC = () => {
  const { state } = useLocation();
  const gener: IOverall_genre = state?.tabledata;
  return (
    <>
      <Navbar />

      <h1 className="m-3"> {gener.genre} Movies</h1>
      <table className="table  table-bordered table-hover m-5  ms-3 " style={{ maxWidth: "600px" }} >
        <thead>
          <tr>
            <th scope="col">SI.NO</th>
            <th scope="col">Movie Name</th>
          </tr>
        </thead>


        <tbody>
          {gener.movies.map((movie, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{movie} </td>
            </tr>
          ))}
        </tbody>


      </table>
    </>
  );
};

export default Table;
