import React from "react";
import { Card } from "./Card";
import { IoIosSchool, IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { useSelector } from "react-redux";
import { Store } from "@/app/store";

export interface CardsContainerInterface {}

const CardsContainer: React.FC<CardsContainerInterface> = () => {
  const about = useSelector(
    (store: Store) => store.options.content.about.cards
  );

  const cardsData = [
    {
      Icon: IoIosSchool,
      text: about.studies,
    },
    {
      Icon: MdOutlineWork,
      text: about.work,
    },
    {
      Icon: IoIosMusicalNotes,
      text: about.hobbies,
    },
  ];
  return (
    <div className="flex flex-wrap justify-around w-full px-6 max-w-[1344px]">
      {cardsData.map(({ Icon, text }, id) => (
        <Card
          key={`card-${id}`}
          icon={
            <Icon
              size={80}
              className="fill-dark-base-300 dark:fill-light-300"
            />
          }
          text={text}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
