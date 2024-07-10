import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import RepoItem from "./RepoItem";
const ReposList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.length > 0 ? (
          repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)
        ) : (
          <p>No repositories available.</p>
        )}
      </div>
    </div>
  );
};

ReposList.propTypes = {
  repos: PropTypes.object.isRequired, // repos prop'u bir obje olarak belirtiliyor
};

ReposList.defaultProps = {
  repos: {}, // Varsayılan olarak boş bir obje
};

export default ReposList;
