import Employees from './employees';
import { employeeData } from './type';

export default function Page() {
  return <Employees data={data.data} />;
}

const data: employeeData = {
  data: [
    {
      id: 1,
      name: '山田 太郎',
      email: 'test99@example.com',
      number: '090-1234-5678',
    },
    {
      id: 2,
      name: '田中 花子',
      email: 'test01@example.com',
      number: '090-1234-5678',
    },
    {
      id: 3,
      name: '田中 花子',
      email: 'test01@example.com',
      number: '090-1234-5678',
    },
    {
      id: 4,
      name: '田中 花子',
      email: 'test01@example.com',
      number: '090-1234-5678',
    },
    {
      id: 5,
      name: '田中 花子',
      email: 'test01@example.com',
      number: '090-1234-5678',
    },
  ],
};
