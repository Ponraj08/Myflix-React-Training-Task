import { useNavigate } from "react-router-dom";
import { IOverall_genre } from "../datas/genrelist";

interface cardProps {
  tabledata: IOverall_genre;
}

const Cards: React.FC<cardProps> = ({ tabledata }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="card shadow  mb-5 bg-body-tertiary rounded component-card-hover" style={{ width: "500px" }}>
        <img src={tabledata.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-text fs-2">{tabledata.genre}</h5>
          <p className="card-text fs-4">{tabledata.description}</p>
          <p>{(tabledata.movies).length} movies</p>

          <button className="btn btn-dark fs-3" onClick={() => navigate(`/Table/${tabledata.id}`, { state: { tabledata } })}>
            see all
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
