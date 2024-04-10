import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Graphs from "./Graphs";
import "./Filter.css"
//import boy from "../Image/boys.jpg"

const FilterData = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [endYearFilter, setEndYearFilter] = useState("");
  const [topicsFilter, setTopicsFilter] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [pestFilter, setPestFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [swotFilter, setSwotFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    DataFilter();
  }, [
    endYearFilter,
    topicsFilter,
    sectorFilter,
    regionFilter,
    pestFilter,
    sourceFilter,
    swotFilter,
    countryFilter,
    cityFilter,
  ]);

  const DataFilter = () => {
    let filtered = data.filter((item) => {
      if (endYearFilter && item.end_year !== endYearFilter) return false;
      if (topicsFilter && item.topic !== topicsFilter) return false;
      if (sectorFilter && item.sector !== sectorFilter) return false;
      if (regionFilter && item.region !== regionFilter) return false;
      if (pestFilter && item.pestle !== pestFilter) return false;
      if (sourceFilter && item.source !== sourceFilter) return false;
      if (swotFilter && item.swot !== swotFilter) return false;
      if (countryFilter && item.country !== countryFilter) return false;
      if (cityFilter && item.city !== cityFilter) return false;
      return true;
    });
    setFilteredData(filtered);
  };

  // Unique values for each filter option
  const endYears = [...new Set(data.map((item) => item.end_year))];
  const topics = [...new Set(data.map((item) => item.topic))];
  const sectors = [...new Set(data.map((item) => item.sector))];
  const regions = [...new Set(data.map((item) => item.region))];
  const pests = [...new Set(data.map((item) => item.pestle))];
  const sources = [...new Set(data.map((item) => item.source))];
  const swots = [...new Set(data.map((item) => item.swot))];
  const countries = [...new Set(data.map((item) => item.country))];
  const cities = [...new Set(data.map((item) => item.city))];

  return (
    <div className="filterData">
      {/* <h2>{data.length}</h2> */}
       <h2 style={{marginBottom:'4px', fontSize:'2rem'}}>Filters</h2>
      <div className="filter-container">
        <div className="filter-list">
          <label htmlFor="endYearFilter">End Year</label>
          <Filters
            options={endYears}
            value={endYearFilter}
            onChange={(e) => setEndYearFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="topicsFilter">Topics</label>
          <Filters
            options={topics}
            value={topicsFilter}
            onChange={(e) => setTopicsFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="SectorFilter">Sector</label>
          <Filters
            options={sectors}
            value={sectorFilter}
            onChange={(e) => setSectorFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="regionFilter">Regions</label>
          <Filters
            options={regions}
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="pestFilter">Pests</label>
          <Filters
            options={pests}
            value={pestFilter}
            onChange={(e) => setPestFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="sourceFilter">Sources</label>
          <Filters
            options={sources}
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="swotFilter">Swots</label>
          <Filters
            options={swots}
            value={swotFilter}
            onChange={(e) => setSwotFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="countryFilter">Countries</label>
          <Filters
            options={countries}
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
          />
        </div>
        <div className="filter-list">
          <label htmlFor="cityFilter">City</label>
          <Filters
            options={cities}
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
        </div>
      </div>
      <Graphs filteredData={filteredData} />
    </div>
  );
};

export default FilterData;
