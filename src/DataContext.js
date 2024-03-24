// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 5,
    totalCount: 0,
  });
  useEffect(() => {
	   console.log("Fetching data...");
    fetchData();
  }, [pagination.currentPage, pagination.pageSize]);

  const fetchData = async (page = pagination.currentPage, size = pagination.pageSize) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?limit=${size}&skip=${(page - 1) * size}&select=firstName,lastName,maidenName,age,gender,phone,email,username,bloodGroup,eyeColor,height,weight`);
	  setUserData(response.data.users);
      setPagination((prevPagination) => ({
        ...prevPagination,
        totalCount: response.data.length // Update total count based on fetched data length (replace with actual total count from API)
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changePageSize = (newPageSize) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      pageSize: newPageSize,
      currentPage: 1, // Reset current page when changing page size
    }));
  };

  const changePage = (newPage) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: newPage,
    }));
  };

  return (
    <DataContext.Provider value={{ userData, pagination, fetchData, changePageSize, changePage }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
