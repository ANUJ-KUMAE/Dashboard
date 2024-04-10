import React from "react";
import Plot from "react-plotly.js";
import "./Charts.css";

const GeographyChart = ({ data }) => {
  const aggregatedData = data.reduce((acc, curr) => {
    const country = curr.country;
    const sector = curr.sector;
    if (!acc[country]) {
      acc[country] = {};
    }
    if (!acc[country][sector]) {
      acc[country][sector] = 0;
    }
    acc[country][sector]++;
    return acc;
  }, {});

  // Prepare data for plotting
  const countryData = [];
  for (const country in aggregatedData) {
    for (const sector in aggregatedData[country]) {
      const value = aggregatedData[country][sector];
      countryData.push({
        type: "choropleth",
        locationmode: "country names",
        locations: [country],
        z: [value],
        text: [`${country}, ${sector}: ${value}`],
        colorscale: "Viridis",
        showscale: true,
      });
    }
  }

  return (
    <div className="Geopg-Container">
      <div className="Geop-List">
        <Plot
          data={countryData}
          layout={{
            width: 600,
            height: 500,
            title: 
            {
              text: "Data Distribution by Country and Sector",
              font : {
                 color:'black',
                 size:25,
              },
            },
            geo: {
              projection: { type: "mercator" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default GeographyChart;
