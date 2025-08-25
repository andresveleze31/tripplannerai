import { div } from "motion/react-client";
import React from "react";

export const SelectTravelersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "🧍‍♂️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "👫",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "👨‍👩‍👧‍👦",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "🧑‍🤝‍🧑",
    people: "5 to 10 People",
  },
];

// export const SelectBudgetOptions = [
//   {
//     id: 1,
//     title: "Cheap",
//     desc: "Stay conscious of costs",
//     icon: "💸",
//     color: "bg-green-100 text-green-600",
//   },
//   {
//     id: 2,
//     title: "Moderate",
//     desc: "Keep cost on the average side",
//     icon: "🪙",
//     color: "bg-yellow-100 text-yellow-600",
//   },
//   {
//     id: 3,
//     title: "Luxury",
//     desc: "Don’t worry about cost",
//     icon: "💎",
//     color: "bg-purple-100 text-purple-600",
//   },
// ];

const GroupSizeUi = ({ onSelectedOption }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center mt-1 gap-2">
      {SelectTravelersList.map((item, index) => (
        <div
          key={index}
          className="p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer"
          onClick={() => onSelectedOption(item.title + ":" + item.people)}
        >
          <h2>{item.icon}</h2>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default GroupSizeUi;
