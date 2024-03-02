import { VscMenu } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import { styled } from "styled-components";

const Container = styled.div`
  height: 86.7vw;
  display: flex;
  flex-direction: column;
  gap: 2.734375vw;
  /* padding-left: 2.8125vw; */
`;

const Logo = styled.img`
  width: 21.875vw;
`;

const MenuIcon = styled(VscMenu)`
  color: #fff;
  font-size: 2.1875vw;

  &:hover {
    cursor: pointer;
    scale: 120%;
  }
`;

const Navbar = styled.div`
  display: flex;
  height: 59vw;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 1s;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
`;

const NavTitle = styled.div<{
  isSelected: boolean;
}>`
  width: 22.11vw;
  height: 4vw;
  font-size: 1.1vw;
  font-weight: 400;
  padding: 0 1vw;
  border-bottom: 0.2vw solid #d3b404;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.isSelected ? "rgb(229, 196, 0, 1)" : "#000")};
  background-color: ${(props) =>
    props.isSelected ? "rgb(0, 0, 0, 0.7)" : "rgb(229, 196, 0, 0.7)"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected ? "#000" : "rgb(229, 196, 0)"};
  }
`;

const NavItem = styled.div<{
  isSelected: boolean;
}>`
  width: 21.51vw;
  height: 4vw;
  font-size: 1.1vw;
  font-weight: 400;
  padding: 0 1vw;
  border-bottom: 0.2vw solid #d3b404;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (props.isSelected ? "rgb(229, 196, 0, 1)" : "#000")};
  background-color: ${(props) =>
    props.isSelected ? "rgb(0, 0, 0, 0.7)" : "rgb(229, 196, 0, 0.7)"};
  margin-left: 0.6vw;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected ? "#000" : "rgb(229, 196, 0)"};
  }
`;

const ArrowUpIcon = styled(MdOutlineKeyboardArrowUp)`
  color: #000;
  font-size: 1.2vw;

  &:hover {
    cursor: pointer;
  }
`;

const ArrowDownIcon = styled(MdOutlineKeyboardArrowDown)`
  color: #000;
  font-size: 1.2vw;

  &:hover {
    cursor: pointer;
  }
`;

const NavSubItem = styled.div<{
  isSelected: boolean;
}>`
  width: 20.91vw;
  height: 3vw;
  font-size: 0.9vw;
  font-weight: 400;
  padding-left: 2vw;
  color: ${(props) => (props.isSelected ? "rgb(229, 196, 0, 1)" : "#000")};
  background-color: ${(props) =>
    props.isSelected ? "rgb(0, 0, 0, 0.7)" : "rgb(229, 196, 0, 0.7)"};
  border-bottom: 0.2vw solid #d3b404;
  display: flex;
  align-items: center;
  margin-left: 1.2vw;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isSelected ? "#000" : "rgb(229, 196, 0)"};
  }
`;

export const Styles = {
  Container,
  Logo,
  MenuIcon,
  Navbar,
  NavItem,
  ArrowUpIcon,
  ArrowDownIcon,
  NavSubItem,
  NavTitle,
};
