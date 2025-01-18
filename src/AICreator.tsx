import { useNavigate, useParams } from "react-router-dom";
import { mockData } from "./mockData";

export const AICreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const creator = mockData[0];

  return (
    <div>
      <button
        style={{
          border: "1px solid white",
          color: "white",
          backgroundColor: "black",
          marginTop: "1rem",
          borderRadius: "4px",
          padding: "6px",
          width: "60px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div
        style={{
          border: "1px solid white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          width: "350px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <img
          src={creator.image}
          alt={creator.name}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "50%",
            marginBottom: "1rem",
          }}
        />
        <h2
          style={{
            margin: "0",
            fontSize: "1.75rem",
            color: "white",
            fontWeight: "600",
          }}
        >
          {creator.name}
        </h2>
        <p style={{ color: "white", margin: "0.5rem 0" }}>{creator.location}</p>
        <p style={{ fontSize: "1rem", color: "white" }}>{creator.bio}</p>
      </div>
    </div>
  );
};
