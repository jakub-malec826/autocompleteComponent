import { removeFromList } from "./operationsOnList";

interface IProps {
    name: string;
    className: string;
    setChosenItems?: Function;
}

export default function EachItemOnList({
    name,
    className,
    setChosenItems,
}: IProps) {
    return (
        <li className={className}>
            {name}{" "}
            {setChosenItems && (
                <button className={className+"-button"} onClick={() => removeFromList(name, setChosenItems)}>
                    X
                </button>
            )}
        </li>
    );
}
