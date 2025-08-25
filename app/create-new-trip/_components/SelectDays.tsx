import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

const SelectDays = ({ onSelectedOption }: any) => {
  const [days, setDays] = useState<number>(3);

  return (
    <div className="p-4 bg-white flex flex-col gap-2 items-center justify-center">
      <h2 className="text-xl font-bold">
        How many days do you want to travel?
      </h2>
      <div className="flex gap-4">
        <Button
          onClick={() => {
            setDays(days - 1);
          }}
          variant={"outline"}
          className="rounded-full"
        >
          <Minus />
        </Button>
        <h2 className="font-bold text-3xl">{days} Days</h2>
        <Button
          onClick={() => {
            setDays(days + 1);
          }}
          variant={"outline"}
          className="rounded-full"
        >
          <Plus />
        </Button>
      </div>
      <Button onClick={() => onSelectedOption(days.toString())}>
        Confirm
      </Button>
    </div>
  );
};

export default SelectDays
