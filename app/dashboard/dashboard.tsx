import Chart from './chart';
import Deposit from './deposit';
import Order from './order';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[80%]">
          {/* chart */}
          <Chart data={chart.data} />
        </div>
        <div>
          {/* deposits */}
          <Deposit data={deposit.data} />
        </div>
      </div>
      <div className="w-[65%]">
        {/* recent orders */}
        <Order data={order.data} />
      </div>
    </>
  );
}
