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
    <div className="grid place-content-center">
      <div className="grid w-[1200px] grid-cols-3 place-content-center justify-center">
        <div className="md:8 lg:9 col-start-1 col-end-3 pl-8 pt-8">
          {/* chart */}
          <Chart data={chart.data} />
        </div>
        <div className="md:4 lg:3 pl-8 pt-8">
          {/* deposits */}
          <Deposit data={deposit.data} />
        </div>
        <div className="xs:12 col-start-1 col-end-4 pl-8 pt-8">
          {/* recent orders */}
          <Order data={order.data} />
        </div>
      </div>
    </div>
  );
}
