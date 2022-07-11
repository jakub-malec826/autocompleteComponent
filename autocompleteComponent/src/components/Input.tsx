import React from "react";

import { addToList } from "./operationsOnList";

interface Props {
    item: string;
    setItem: Function;
    itemsToChoose: string[];
    chosenItems: string[];
    setItemsToChoose: Function;
    setToChosenItem: Function;
}

export default function Input({
    item,
    setItem,
    itemsToChoose,
    chosenItems,
    setItemsToChoose,
    setToChosenItem,
}: Props) {
    window.onload = () => setItem("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    const addToLists = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addToList(item, itemsToChoose, setItemsToChoose);
        addToList(item, chosenItems, setToChosenItem);
        setItem("");
    };

    return (
        <form className="Form" onSubmit={addToLists}>
            <input
                className="Form__Input"
                type="text"
                value={item}
                onChange={onChange}
                autoComplete="off"
            />
        </form>
    );
}
