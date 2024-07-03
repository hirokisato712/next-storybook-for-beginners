import Chart from './chart';
import Deposit from './deposit';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div className="flex">
      <div className="float-left">
        {/* chart */}
        <Chart data={chart.data} />
      </div>

      <div className="float-right">
        {/* deposits */}
        <Deposit data={deposit.data} />
      </div>
      <div>{/* recent orders */}</div>
    </div>
  );
}
