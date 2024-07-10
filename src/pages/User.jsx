import React, { useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import ReposList from "../components/Repos/ReposList";

const User = () => {
  const { user, getUser, getRepos, repos } = useContext(GithubContext);
  console.log(user);
  const params = useParams();
  const {
    avatar_url,
    bio,
    followers,
    following,
    location,
    name,
    type,
    hireable,
    public_repos,
    html_url,
  } = user;
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Go To Back
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">{name}</h1>
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && (
                <div className="mx-1 badge badge-info">Hireable</div>
              )}
              <p className="text-2xl">{bio}</p>
              <div className="flex gap-8 flex-wrap">
                <div className="stat">
                  <div className="stat-title text-md flex gap-4 shadow-md">
                    <p className=" stat-value text-2xl ">
                      Followers: {followers}
                    </p>
                    <p className=" stat-value text-2xl">
                      Following:{following}
                    </p>
                    <p className=" stat-value text-2xl">Repos:{public_repos}</p>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="mt-4">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  <FaGithub />
                  Visit To Github Page
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location:</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
            </div>
          </div>
          <ReposList repos={repos} />
        </div>
      </div>
    </>
  );
};

export default User;
