import Order from './order';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div className="flex justify-center">
      <div>
        {/* chart  */} {/* deposits */}
      </div>
      <div className="w-[65%]">
        {/* recent orders */}
        <Order data={order.data} />
      </div>
    </div>
  );
}
