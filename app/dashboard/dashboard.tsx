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
    <div className="grow-1 flex justify-between">
      <div className="w-[80%]">
        {/* chart */}
        <Chart data={chart.data} />
      </div>
      <div>
        {/* deposits */}
        <Deposit data={deposit.data} />
      </div>

      <div>{/* recent orders */}</div>
    </div>
  );
}
