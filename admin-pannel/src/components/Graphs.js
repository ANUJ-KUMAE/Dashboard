import React from 'react'
//import Plot from 'react-plotly.js'
import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'
import LineChart from './Charts/LineChart'
// import ProgressCircle from './Charts/ProgressCircle'
import GeographyChart from './Charts/GeographyChart'
import ScatterPlot from './Charts/ScatterPlot'
//import AreaChart from './Charts/AreaChart'

const Graphs = ({filteredData}) => {
  return (
    <div>
        <div>
            <BarChart data = {filteredData}/>
        </div>
        <div>
            <ScatterPlot datas = {filteredData}/>
        </div>
        <div>
            <PieChart data = {filteredData} layout={{ width: 800, height: 400, title: 'Pie Chart' }} />
        </div>
        <div>
            <LineChart data = {filteredData} layout={{ width: 800, height: 400, title: 'Line Chart' }} />
        </div>
        {/* <div>
            <ProgressCircle data = {filteredData} layout={{ width: 400, height: 400, title: 'Progress Circle' }} />
        </div> */}
        <div>
            <GeographyChart  data={filteredData}/>
        </div>
    </div>
  )
}

export default Graphs
