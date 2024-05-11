import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 60px;
  padding: 0 20px;
  
  .navbar-left-items {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }

  .navbar-right-items {
    display: flex;
    align-items: center;

    > button {
      margin: 0 10px;
      text-decoration: none;
      color: #fff;
      background: transparent;
      font-size: larger;
      padding: 2px 20px;
      &:hover {
        color: #ccc;
        cursor: pointer;
      }
    }

    .profile-popover {
      position: relative;

      a {
        text-decoration: none;
        color: white;
      }

      .popover-btn {
        border: none;
        color: white;
        cursor: pointer;
        background-color: transparent;
        padding: 5px 0;
        font-size: 20px;
      }

      .popover {
        display: block;
        position: absolute;
        top: 50px;
        right: 0;
        width: 200px;
        padding: 10px;
        background-color: whitesmoke;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        gap: 10px;

        > button {
          width: 100%;
          color: #333;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;
          background-color: transparent;
          padding: 5px 0;
          font-size: 15px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 5px;
        }
      }
    }
  }
`;
