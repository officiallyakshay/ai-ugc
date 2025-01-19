import { useState } from "react";
import { Link } from "react-router-dom";
import { mockData } from "./mockData";

export const Home = () => {
  const [listOfCreators, setListOfCreators] = useState(mockData);

  return (
    <>
      <div
        style={{ textAlign: "center", fontSize: "1.25rem", margin: "1rem 0" }}
      >
        AI Creators Available
      </div>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          padding: "1rem",
        }}
      >
        {listOfCreators.map((creator) => (
          <Link
            key={creator.id}
            style={{
              border: "1px solid white",
              borderRadius: "12px",
              overflow: "hidden",
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              backgroundColor: "black",
            }}
            to={`/${creator.id}`}
          >
            <img
              src={creator.image}
              alt={creator.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <div>
              <h4
                style={{
                  margin: "0",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                {creator.name}
              </h4>
              <p style={{ color: "white", margin: "0.5rem 0" }}>
                {creator.location}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                {creator.bio}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <style>
        {`
          @media (min-width: 768px) {
            div[style*='grid'] {
              grid-template-columns: repeat(2, 1fr); /* 2 columns for medium+ screens */
            }
          }
        `}
      </style>
    </>
  );
};
