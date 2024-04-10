import React from "react";
import Plot from "react-plotly.js";
import "./Charts.css";

const LineChart = ({ data }) => {
  const intensityByCountryAndYear = data.reduce((acc, curr) => {
    const country = curr.country;
    const year = curr.end_year;
    const intensity = curr.intensity;

    if (!acc[country]) {
      acc[country] = {};
    }

    if (!acc[country][year]) {
      acc[country][year] = [];
    }

    acc[country][year].push(intensity);

    return acc;
  }, {});

  // Calculate average intensity for each country and year
  const averageIntensityByCountryAndYear = {};
  for (const country in intensityByCountryAndYear) {
    averageIntensityByCountryAndYear[country] = {};
    for (const year in intensityByCountryAndYear[country]) {
      const intensities = intensityByCountryAndYear[country][year];
      const sum = intensities.reduce((a, b) => a + b, 0);
      const average = sum / intensities.length;
      averageIntensityByCountryAndYear[country][year] = average;
    }
  }

  // Prepare data for plotting
  const plotData = [];
  for (const country in averageIntensityByCountryAndYear) {
    const years = Object.keys(averageIntensityByCountryAndYear[country]).sort();
    const intensities = years.map(
      (year) => averageIntensityByCountryAndYear[country][year]
    );
    plotData.push({
      x: years,
      y: intensities,
      type: "scatter",
      mode: "lines+markers",
      name: country,
    });
  }

  return (
    <div className="Line-Container">
      <div className="Line-List">
        <Plot
          data={plotData}
          layout={{
            //width: '100%',
            width:1100,
            height: 400,
            title:
            {
              text:  "Intensity Trend by Country",
              font:{
                color:'black',
                size:25,
              },
            },
            xaxis: { title: "Year" },
            yaxis: { title: "Intensity" },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
