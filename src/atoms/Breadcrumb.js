import React from 'react';


const Breadcrumb = ({ path }) => {
  return <div id="breadcrumb">Home / <span id="bc_path"> {path} </span></div>;
};

export default Breadcrumb;