import { useState, useEffect } from "react";
import SidebarItem from "./sidebar-item/sidebar-item.component";
import { Link } from "react-router-dom";

import "./sidebar.styles.scss";
import useViewport from "../../hooks/use-viewport";

const SideBar = (): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const { width } = useViewport();
  const breakpoint: number = 900;

  useEffect(() => {
    if (width <= breakpoint) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }, [width]);

  return (
    <nav className={`sidebar-container ${menuOpen ? "open" : "closed"}`}>
      <button
        className="toggle-button"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span className={`chevron ${menuOpen ? "left" : "right"}`} />
      </button>
      <div className="sidebar-menu-items">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActiveMenu("home");
          }}
        >
          <SidebarItem
            menuIsOpen={menuOpen}
            iconName="home"
            itemTitle="Summary"
            isSelected={activeMenu === "home" ? true : false}
          />
        </Link>
        <Link
          to="/checklist"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActiveMenu("checklist");
          }}
        >
          <SidebarItem
            menuIsOpen={menuOpen}
            iconName="tasks"
            itemTitle="Checklist"
            isSelected={activeMenu === "checklist" ? true : false}
          />
        </Link>
        <Link
          to="/originals"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActiveMenu("originals");
          }}
        >
          <SidebarItem
            menuIsOpen={menuOpen}
            iconName="balance-scale"
            itemTitle="Originals"
            isSelected={activeMenu === "originals" ? true : false}
          />
        </Link>
        <Link
          to="/receipts"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActiveMenu("receipt");
          }}
        >
          <SidebarItem
            menuIsOpen={menuOpen}
            iconName="receipt"
            itemTitle="Receipts"
            isSelected={activeMenu === "receipt" ? true : false}
          />
        </Link>
        <Link
          to="/disbursments"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActiveMenu("disbursments");
          }}
        >
          <SidebarItem
            menuIsOpen={menuOpen}
            iconName="hand-holding-usd"
            itemTitle="Disbursments"
            isSelected={activeMenu === "disbursments" ? true : false}
          />
        </Link>
        <Link
          to="/gen-docs"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActiveMenu("gen-docs");
          }}
        >
          <SidebarItem
            menuIsOpen={menuOpen}
            iconName="file-alt"
            itemTitle="Generate Documents"
            isSelected={activeMenu === "gen-docs" ? true : false}
          />
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
