import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValue = props.dataPoints.map( dataPoint => dataPoint.value); 
  const totalMaximum = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
