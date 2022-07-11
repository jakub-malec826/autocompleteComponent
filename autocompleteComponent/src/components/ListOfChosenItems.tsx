import { renderList } from "./operationsOnList";

interface IProps {
    chosenItems: string[];
    setChosenItems: Function;
}

export default function ListOfChosenItems({
    chosenItems,
    setChosenItems,
}: IProps) {
    return (
        <ul className="ListOfChosenItems">
            {renderList(
                chosenItems,
                "ListOfChosenItems__Element",
                undefined,
                undefined,
                setChosenItems
            )}
        </ul>
    );
}
