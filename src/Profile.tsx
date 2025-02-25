import { useState } from "react";
import { mockData } from "./mockData";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const creator = mockData[0];

  const handleEditToggle = () => setIsEditing(!isEditing);

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        maxWidth: "90%", // For mobile responsiveness
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

      {/* <button
        onClick={handleEditToggle}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {isEditing ? "Cancel" : "Edit Profile"}
      </button>
      {isEditing && <EditComponent creator={creator} />}*/}
    </div>
  );
};

// const EditComponent = ({ creator }: any) => {
//   return (
//     <div
//       style={{
//         marginTop: "1.5rem",
//         padding: "1rem",
//         borderRadius: "8px",
//         textAlign: "left",
//       }}
//     >
//       <h3>Edit Profile</h3>
//       <label style={{ display: "block", marginBottom: "0.5rem" }}>Name</label>
//       <input
//         type="text"
//         value={creator.name}
//         style={{
//           width: "100%",
//           padding: "0.5rem",
//           marginBottom: "1rem",
//           borderRadius: "8px",
//           border: "1px solid #ccc",
//         }}
//       />
//       <label style={{ display: "block", marginBottom: "0.5rem" }}>Bio</label>
//       <textarea
//         value={creator.bio}
//         style={{
//           width: "100%",
//           padding: "0.5rem",
//           marginBottom: "1rem",
//           borderRadius: "8px",
//           border: "1px solid #ccc",
//         }}
//       />
//       <button
//         style={{
//           padding: "0.5rem 1rem",
//           backgroundColor: "#28a745",
//           color: "#fff",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//         }}
//       >
//         Save Changes
//       </button>
//     </div>
//   );
// };
