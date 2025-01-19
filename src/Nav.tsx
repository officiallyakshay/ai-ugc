import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          borderBottom: "1px solid white",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "400",
          })}
        >
          AI UGC
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "400",
          })}
        >
          Profile
        </NavLink>
      </nav>
    </>
  );
};
