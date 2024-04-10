import React from "react";
import Plot from "react-plotly.js";
import "./Charts.css";

const ScatterPlot = ({ datas }) => {
  const ScatterPlots = {
    x: datas.map((item) => item.intensity),
    y: datas.map((item) => item.likelihood),
    mode: "markers",
    type: "scatter",
    marker: { color: "red" },
  };

  return (
    <div className="Scatter-Container">
      <div className="Scatter-List">
        <Plot
          data={[ScatterPlots]}
          layout={{
            //width: "100%",
            width:1100,
            height: 300,
            title:
            {
              text: "Intensity vs Likelihood",
              font:{
                color:'black',
                size:25,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ScatterPlot;
