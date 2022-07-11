import { useState } from "react";
import EachItemOnList from "./EachItemOnList";
import { CatchKeys } from "./MovementOnList";

export function addToList(
    itemToAdd: string,
    list: string[],
    setList: Function
) {
    if (itemToAdd !== "" && !list.includes(itemToAdd)) {
        setList([...list, itemToAdd]);
    }
}

export function removeFromList(itemToRemove: string, setList: Function) {
    setList((oldList: []) => oldList.filter((item) => item !== itemToRemove));
}

export function renderList(
    listOfItems: string[],
    className: string,
    focusingItem?: string,
    setFocusingItem?: Function,
    setChosenItems?: Function
) {
    const [currentItem, setCurrentItem] = useState(-1);
    if (focusingItem && setFocusingItem) {
        CatchKeys(
            currentItem,
            setCurrentItem,
            listOfItems,
            focusingItem,
            setFocusingItem
        );
    }
    return listOfItems.map((item) => (
        <EachItemOnList
            key={listOfItems.indexOf(item)}
            name={item}
            className={
                currentItem === listOfItems.indexOf(item) && currentItem !== -1
                    ? className + "-active"
                    : className
            }
            setChosenItems={setChosenItems}
        />
    ));
}
