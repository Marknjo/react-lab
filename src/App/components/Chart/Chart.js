import './Chart.css';
import ChartBar from './ChartBar';

const Chart = function ({ dataPoints }) {
  return (
    <div className="chart">
      {dataPoints.map(dataPoint => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
