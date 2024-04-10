import React from "react";
import Plot from "react-plotly.js";
import "./Charts.css";

const BarChart = ({ data }) => {
  const intensityByYear = data.reduce((acc, curr) => {
    const year = curr.end_year;
    const intensity = curr.intensity;
    if (year in acc) {
      acc[year].push(intensity);
    } else {
      acc[year] = [intensity];
    }
    return acc;
  }, {});

  // Calculate average intensity for each year
  const averageIntensityByYear = Object.keys(intensityByYear).map((year) => {
    const intensities = intensityByYear[year];
    const sum = intensities.reduce((a, b) => a + b, 0);
    const average = sum / intensities.length;
    return { year, intensity: average };
  });

  // Sort by year
  averageIntensityByYear.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  // Extract x and y values for plotting
  const xValues = averageIntensityByYear.map((item) => item.year);
  const yValues = averageIntensityByYear.map((item) => item.intensity);

  const intensityByTopic = {
    x: data.map((item) => item.topic),
    y: data.map((item) => item.intensity),
    type: "bar",
    marker: { color: "blue" },
  };

  const intensityByRegion = data.reduce((acc, curr) => {
    const region = curr.region;
    const intensity = curr.intensity;

    if (!acc[region]) {
      acc[region] = [];
    }

    acc[region].push(intensity);

    return acc;
  }, {});

  // Calculate average intensity for each region
  const averageIntensityByRegion = {};
  for (const region in intensityByRegion) {
    const intensities = intensityByRegion[region];
    const sum = intensities.reduce((a, b) => a + b, 0);
    const average = sum / intensities.length;
    averageIntensityByRegion[region] = average;
  }

  // Prepare data for plotting
  const plotData = [
    {
      x: Object.keys(averageIntensityByRegion),
      y: Object.values(averageIntensityByRegion),
      type: "bar",
    },
  ];

  return (
    <div className="Bar-Container">
      <div className="Bar-List">
        <Plot
          data={[
            {
              x: xValues,
              y: yValues,
              type: "bar",
              marker: { color: "blue" },
            },
          ]}
          layout={{
           // width: "100%",
           width:1100,
            height: 400,
            title: 
            {
              text: "Average Intensity by Year",
              font:
              {
                color:'black',
                size:25,
              },
            },
            autosize:true,
            responsive:true,
            xaxis: { title: "Year" },
            yaxis: { title: "Intensity" },
          }}
          className="bar-chart"
          useResizeHandler={true}
          // autosize= {true}
          // responsive= {true}
          // style={{width:'100%', height:'100%'}}
        />
      </div>
      <div className="Bar-List">
        <Plot
          data={[intensityByTopic]}
          layout={{ 
            //width: "100%",
            width:1100, 
            height: 400, 
            title: 
            {  
              text:"Intensity by Topic", 
              font: 
              {
                color:'black',
                size:25,
              } 
            }
          }}
          className="bar-chart"
        />
      </div>
      <div className="Bar-List">
        <Plot
          data={plotData}
          layout={{
            //width: "100%",
            width:1100,
            height: 400,
            title: {
              text: "Average Intensity by Region",
              font: {
                color: "black",
                size: 25,
              },
            },
            xaxis: { title: "Region" },
            yaxis: { title: "Intensity" },
          }}
          className="bar-chart"
        />
      </div>
    </div>
  );
};

export default BarChart;
