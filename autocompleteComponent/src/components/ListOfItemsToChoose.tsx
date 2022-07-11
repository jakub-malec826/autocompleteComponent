import { renderList } from "./operationsOnList";

interface IProps {
    itemsToChoose: string[];
    focusingItem: string;
    setFocusingItem: Function;
}

export default function ListOfItemsToChoose({
    itemsToChoose,
    focusingItem,
    setFocusingItem,
}: IProps) {
    const listToRender = ResearchItemsList(itemsToChoose, focusingItem);

    return (
        <ul className="ListToChooseFrom">
            {focusingItem &&
                renderList(
                    listToRender,
                    "ListToChooseFrom__Element",
                    focusingItem,
                    setFocusingItem
                )}
        </ul>
    );
}

function ResearchItemsList(itemsToChoose: string[], focusingItem: string) {
    let itemsLookingFor = itemsToChoose.filter(
        (item) => item && item.includes(focusingItem)
    );
    return itemsLookingFor;
}
