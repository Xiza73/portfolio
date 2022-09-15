import React from "react";
import { Card } from "./Card";
import { IoIosSchool, IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { useSelector } from "react-redux";
import { Store } from "@/app/store";

export interface CardsContainerInterface {}

const CardsContainer: React.FC<CardsContainerInterface> = () => {
  const { studies, work, hobbies } = useSelector(
    (store: Store) => store.options.content.about
  );
  return (
    <div className="flex flex-wrap justify-around w-full px-6 max-w-[1344px]">
      <Card
        icon={
          <IoIosSchool
            size={80}
            className="fill-dark-base-300 dark:fill-light-300"
          />
        }
        text={studies}
      />
      <Card
        icon={
          <MdOutlineWork
            size={80}
            className="fill-dark-base-300 dark:fill-light-300"
          />
        }
        text={work}
      />
      <Card
        icon={
          <IoIosMusicalNotes
            size={80}
            className="fill-dark-base-300 dark:fill-light-300"
          />
        }
        text={hobbies}
      />
    </div>
  );
};

export default CardsContainer;
