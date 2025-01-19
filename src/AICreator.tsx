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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          border: "1px solid white",
          color: "white",
          backgroundColor: "black",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.3s ease",
          marginTop: "20px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "black";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "black";
          e.currentTarget.style.color = "white";
        }}
        onClick={() => navigate("/")}
      >
        <span>&larr;</span> Back
      </button>

      <div
        style={{
          border: "1px solid white",
          padding: "1rem",
          borderRadius: "12px",
          margin: "1rem auto",
          textAlign: "center",
        }}
      >
        <img
          src={creator.image}
          alt={creator.name}
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "50%",
            marginBottom: "1rem",
          }}
        />
        <h2
          style={{
            margin: "0",
            fontSize: "1.5rem",
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
