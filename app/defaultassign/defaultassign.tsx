'use client';

import { Button, Card, Paper, TextField, Typography } from '@mui/material';

import { DefaultAssignData } from './type';

const judge = ['平日', '休日'];
const weekday = ['月曜', '火曜', '水曜', '木曜', '金曜', '土曜', '日曜', '祝日'];

export default function DefaultAssign({ defaultAssign }: Readonly<{ defaultAssign: DefaultAssignData }>) {
  const defaultData = [
    defaultAssign.data.monday,
    defaultAssign.data.tuesday,
    defaultAssign.data.wednesday,
    defaultAssign.data.thursday,
    defaultAssign.data.friday,
    defaultAssign.data.saturday,
    defaultAssign.data.sunday,
    defaultAssign.data.holiday,
  ];

  return (
    <div className="grid gap-20">
      <Typography component="h1" variant="h4" color="primary" className="flex items-center justify-center font-bold">
        デフォルトアサイン設定
      </Typography>
      <Paper className="grid h-auto w-full grid-cols-8 gap-6">
        <div className="col-span-6 grid grid-cols-1 gap-y-12">
          <Typography component="h1" variant="h6" color="primary" className="h-20 content-end pl-9 font-bold">
            休日/平日設定
          </Typography>
          <div className="grid h-auto w-full grid-cols-4 gap-3 p-3">
            {weekday.map((day, index) => (
              <div key={index} className="justify-center">
                <div className={`h-12 content-center text-center ${defaultData[index] ? 'text-red-600' : ''}`}>
                  {day}
                </div>
                <Card
                  className={`h-32 content-center border border-solid text-center font-extrabold ${defaultData[index] ? 'border-red-600 bg-red-200 text-red-600' : 'border-gray-300 bg-gray-100'}`}
                >
                  {defaultData[index] ? judge[1] : judge[0]}
                </Card>
              </div>
            ))}
          </div>
          <div className="mb-16 ml-6 justify-center">
            <p className="m-0">曜日をクリックすると平日と休日を切り替えることができます。</p>
            <p className="m-0">休日として設定された曜日はデフォルトで休に配置されます。</p>
          </div>
        </div>
        <div className="relative col-span-2 flex w-full flex-col pr-5">
          <Typography component="h1" variant="h6" color="primary" className="h-20 content-end pl-9 font-bold">
            平日アサイン先
          </Typography>
          <TextField
            className="mt-6 h-4 w-full"
            variant="outlined"
            label="名称"
            defaultValue={defaultAssign.data.weekdayAssign}
          />
          <Button variant="contained" className="absolute bottom-14 right-5">
            変更を保存
          </Button>
        </div>
      </Paper>
    </div>
  );
}
