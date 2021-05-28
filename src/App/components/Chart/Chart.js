import Card from '../UI/Card';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = function ({ dataPoints }) {
  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <Card className="chart">
      {dataPoints.map(dataPoint => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </Card>
  );
};

export default Chart;
