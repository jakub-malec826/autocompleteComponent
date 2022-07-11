import { useState } from "react";

import Input from "./Input";
import ListOfItemsToChoose from "./ListOfItemsToChoose";
import ListOfChosenItems from "./ListOfChosenItems";
import { defaultList } from "./defaultList";

import "../styles/Main.scss";

export default function Main() {
    const [focusingItem, setFocusingItem] = useState<string>(" ");
    const [itemsToChoose, setItemsToChoose] = useState<string[]>(defaultList);
    const [chosenItems, setToChosenItem] = useState<string[]>(["react"]);

    return (
        <div className="Widget">
            <div className="Widget__Top">
                <ListOfChosenItems
                    chosenItems={chosenItems}
                    setChosenItems={setToChosenItem}
                />

                <Input
                    item={focusingItem}
                    itemsToChoose={itemsToChoose}
                    chosenItems={chosenItems}
                    setItem={setFocusingItem}
                    setItemsToChoose={setItemsToChoose}
                    setToChosenItem={setToChosenItem}
                />
            </div>
            <div className="Widget__Bottom">
                <ListOfItemsToChoose
                    itemsToChoose={itemsToChoose}
                    focusingItem={focusingItem}
                    setFocusingItem={setFocusingItem}
                />
            </div>
        </div>
    );
}
