import { useState } from "react";
import { Link } from "react-router-dom";
import { mockData } from "./mockData";

export const Home = () => {
  const [listOfCreators, setListOfCreators] = useState(mockData);

  return (
    <>
      <div style={{ textAlign: "center" }}>AI Creator's Available</div>
      {/* <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          style={{
            color: "white",
            border: "1px solid white",
            backgroundColor: "black",
            padding: "5px",
            borderRadius: "5px",
            marginRight: "4px",
            cursor: "pointer",
          }}
        >
          Carousel View
        </button>
        <button
          style={{
            color: "white",
            border: "1px solid white",
            backgroundColor: "black",
            padding: "5px",
            borderRadius: "5px",
            marginLeft: "4px",
            cursor: "pointer",
          }}
        >
          List View
        </button>
      </div> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        {listOfCreators.map((creator) => (
          <Link
            key={creator.id}
            style={{
              border: "1px solid white",
              borderRadius: "12px",
              width: "600px",
              overflow: "hidden",
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              textDecoration: "none",
            }}
            to={`/${creator.id}`}
          >
            <img
              src={creator.image}
              alt={creator.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginRight: "1rem",
                border: "1px solid white",
              }}
            />

            <div>
              <h4
                style={{
                  margin: "0",
                  fontSize: "1.5rem",
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
    </>
  );
};
