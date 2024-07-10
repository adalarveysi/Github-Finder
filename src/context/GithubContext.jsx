import { createContext, useReducer } from "react";
import githubReducer from "../Reducers/GithubReducers";

const GithubContext = createContext();

const GithubURL = import.meta.env.VITE_APP_GITHUB_URL;
const GithubToken = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    try {
      const response = await fetch(`${GithubURL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GithubToken}`,
        },
      });
      const { items } = await response.json();
      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getUser = async (login) => {
    setLoading();
    try {
      const response = await fetch(`${GithubURL}/users/${login}`, {
        headers: {
          Authorization: `token ${GithubToken}`,
        },
      });
      if (response.status === 404) {
        window.location = "/notfound";
      } else {
        const data = await response.json();
        dispatch({
          type: "GET_USER",
          payload: data,
        });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  const getRepos = async (login) => {
    setLoading();
    const response = await fetch(`${GithubURL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GithubToken}`,
      },
    });
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const resetUsers = () => dispatch({ type: "RESET_USERS" });

  const value = {
    users: state.users,
    user: state.user,
    repos: state.repos,
    isLoading: state.loading,
    searchUsers,
    resetUsers,
    getRepos,
    getUser,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export default GithubContext;
