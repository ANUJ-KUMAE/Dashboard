import React from "react";
import Plot from "react-plotly.js";
import "./Charts.css";

const PieChart = ({ data }) => {
  const countryDistribution = {
    values: data.reduce((acc, item) => {
      if (acc[item.country]) {
        acc[item.country]++;
      } else {
        acc[item.country] = 1;
      }
      return acc;
    }, {}),
    labels: [...new Set(data.map((item) => item.country))],
    type: "pie",
  };

  const topicDistribution = {
    values: data.reduce((acc, item) => {
      if (acc[item.topic]) {
        acc[item.topic]++;
      } else {
        acc[item.topic] = 1;
      }
      return acc;
    }, {}),
    labels: [...new Set(data.map((item) => item.topic))],
    type: "pie",
  };

  const topicCounts = data.reduce((acc, curr) => {
    const topic = curr.topic;
    if (!acc[topic]) {
      acc[topic] = 0;
    }
    acc[topic]++;
    return acc;
  }, {});

  // Prepare data for plotting
  const pieData = {
    values: Object.values(topicCounts),
    labels: Object.keys(topicCounts),
    type: "pie",
  };

  const likelihoodByCountry = data.reduce((acc, curr) => {
    const country = curr.country;
    const likelihood = curr.likelihood;

    if (!acc[country]) {
      acc[country] = [];
    }

    acc[country].push(likelihood);

    return acc;
  }, {});

  // Calculate average likelihood for each country
  const averageLikelihoodByCountry = {};
  for (const country in likelihoodByCountry) {
    const likelihoods = likelihoodByCountry[country];
    const sum = likelihoods.reduce((a, b) => a + b, 0);
    const average = sum / likelihoods.length;
    averageLikelihoodByCountry[country] = average;
  }

  // Prepare data for plotting
  const plotData = [
    {
      labels: Object.keys(averageLikelihoodByCountry),
      values: Object.values(averageLikelihoodByCountry),
      type: "pie",
    },
  ];

  return (
    <div className="Pie-Container">
      <div className="Pie-List">
        <Plot
          data={[countryDistribution]}
          layout={{ 
            width: 520, 
            height: 450, 
            title: 
            {
              text: "Country Distribution",
              font:
              {
                color:'black',
                size:25,
              },
            }, 
          }}
        />
      </div>
      <div className="Pie-List">
        <Plot
          data={[topicDistribution]}
          layout={{ 
            width: 520, 
            height: 450, 
            title: 
            {
              text: "Topic Distribution", 
              font:
              {
                color:'black',
                size:25,
              },
            }  
          }}
        />
      </div>
      <div className="Pie-List">
        <Plot
          data={[pieData]}
          layout={{
            width: 520,
            height: 400,
            title: 
            {
              text: "Topic Distribution Across All Countries",
              font:
              {
                color:'black',
                size:25,
              },
            }
          }}
        />
      </div>
      <div className="Pie-List">
        <Plot
          data={plotData}
          layout={{
            width: 520,
            height: 400,
            title: 
            {
              text:"Likelihood Distribution by Country",
              font:
              {
                color:'black',
                size:25,
              },
            },
            hole: 0.4, // Define the size of the hole (0 to 1)
            showlegend: true,
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;
