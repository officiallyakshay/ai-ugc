import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: "white",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          AI UGC
        </NavLink>
        <div style={{ marginLeft: "auto" }}>
          {/* <NavLink
            to="/pricing"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: isActive ? "underline" : "none",
              marginRight: "20px",
            })}
          >
            Pricing
          </NavLink> */}
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Profile
          </NavLink>
        </div>
      </nav>
    </>
  );
};
