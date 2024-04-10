import React, {useState, useEffect} from "react";
import axios from "axios";
//import Plot from "react-plotly.js";
import FilterData from "./FilterData";

const DashData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get("http://Get-product");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
       <FilterData data={data}/>
  );
};

export default DashData;
