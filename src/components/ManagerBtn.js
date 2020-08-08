import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BtnContainer = styled.div`
  .managerBtn {
    margin: 10px;
    box-shadow: inset 0px 1px 0px 0px #fff6af;
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color: #ffec64;
    border-radius: 6px;
    border: 1px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffee66;
  }
  .managerBtn:hover {
    background: linear-gradient(to bottom, #eec006 5%, #ffec64 100%);
    background-color: #eec006;
  }
  .managerBtn:active {
    position: relative;
    top: 1px;
  }
`;

function ManagerBtn() {
  return (
    <BtnContainer>
      <NavLink className="managerBtn" to="/support-team">
        View The Team
      </NavLink>
    </BtnContainer>
  );
}

export default ManagerBtn;
