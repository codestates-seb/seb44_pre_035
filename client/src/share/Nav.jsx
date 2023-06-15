import { Link } from "react-router-dom";
import { ReactComponent as CollectiveIcon } from "../img/collectiveIcon.svg";
import { ReactComponent as QuestionIcon } from "../img/questionIcon.svg";
import { ReactComponent as InfoIcon } from "../img/infoIcon.svg";
import { ReactComponent as Team1 } from "../img/team1.svg";
import { ReactComponent as Team2 } from "../img/team2.svg";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
  height: 100%;
  border-right: 1px solid #d7d9dd;
`;

export const NavBlock = styled.div`
  position: sticky;
  top: 40px;
  width: 164px;
  padding-top: 20px;
  margin-bottom: 8px;
  background-color: #ffffff;
`;

export const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 12px 4px 8px;
  h2 {
    font-size: 11px;
    font-weight: 400;
    color: #6a737c;
    text-transform: uppercase;
  }
  svg {
    fill: #6b737c;
  }
`;

export const NavPrimary = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 34px;
  padding: 4px 4px 4px 8px;
  font-size: 12px;
  font-weight: 400;
  color: #525960;
  cursor: pointer;
  &:hover {
    color: #0c0d0e;
    .home,
    .collective,
    .team {
      color: #0c0d0e;
    }
    .question {
      fill: #0c0d0e;
    }
  }
  ${(props) =>
    props.selected &&
    css`
      border-right: 3px solid #f48123;
      font-weight: 700;
      color: #0c0d0e;
      background-color: #f0f2f4;
      .home,
      .collective,
      .team {
        font-weight: 700;
        color: #0c0d0e;
      }
      .question {
        fill: #0c0d0e;
      }
    `}
`;

export const NavQuestion = styled(NavPrimary)`
  width: 100%;
  padding-left: 30px;
`;

export const NavInterval = styled(NavPrimary)`
  width: 100%;
  padding: 10px 6px 8px 6px;
  svg {
    fill: #848c95;
    margin-right: 4px;
    margin-top: -4px;
  }
`;

export const NavSubtitle = styled(NavInterval)`
  svg {
    fill: #f48123;
  }
  a {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #525960;
  }
`;

export const NavTeams = styled(NavSubtitle)`
  svg {
    fill: #ffffff;
  }
`;

export const TeamsIcon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: #f48123;
  margin-top: -4px;
  margin-right: 4px;
  .bag {
    position: absolute;
    top: 1px;
    left: 1px;
    margin-top: 0;
  }
  .key {
    position: absolute;
    right: -6px;
    bottom: -3px;
    path:last-child {
      fill: #6b737c;
    }
  }
`;

const Nav = () => {
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  return (
    <NavWrapper>
      <NavBlock>
        <ol>
          <li aria-label="Go to Home page">
            <Link
              to="/"
              onClick={() => dispatch({ type: "ACTIVETAB", value: 0 })}
            >
              <NavPrimary selected={activeTab === 0} className="home">
                Home
              </NavPrimary>
            </Link>
          </li>
          <li>
            <NavTitle>
              <h2>Public</h2>
            </NavTitle>
            <ol>
              <li aria-label="Go to Questions page">
                <Link
                  to="/questions"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 1 })}
                >
                  <NavInterval selected={activeTab === 1}>
                    <QuestionIcon className="question" />
                    <span>Questions</span>
                  </NavInterval>
                </Link>
              </li>
              <li aria-label="Go to Tags page">
                <Link
                  to="/tags"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 2 })}
                >
                  <NavQuestion selected={activeTab === 2}>Tags</NavQuestion>
                </Link>
              </li>
              <li aria-label="Go to Users page">
                <Link
                  to="/users"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 3 })}
                >
                  <NavQuestion selected={activeTab === 3}>Users</NavQuestion>
                </Link>
              </li>
              <li aria-label="Go to Companies">
                <Link
                  to="/jobs/Companies"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 4 })}
                >
                  <NavQuestion selected={activeTab === 4}>
                    Companies
                  </NavQuestion>
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <NavTitle>
              <h2>Collectives</h2>
              <InfoIcon />
            </NavTitle>
            <NavSubtitle selected={activeTab === 5}>
              <CollectiveIcon />
              <Link
                to="/collectives"
                className="collective"
                onClick={() => dispatch({ type: "ACTIVETAB", value: 5 })}
              >
                Explore Collectives
              </Link>
            </NavSubtitle>
          </li>
          <li>
            <NavTitle>
              <h2>Teams</h2>
              <InfoIcon />
            </NavTitle>
            <NavTeams>
              <TeamsIcon>
                <Team1 className="bag" />
                <Team2 className="key" />
              </TeamsIcon>
              <a
                className="team"
                href="https://stackoverflowteams.com/teams/create/free?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta"
              >
                Create free Team
              </a>
            </NavTeams>
          </li>
        </ol>
      </NavBlock>
    </NavWrapper>
  );
};

export default Nav;
