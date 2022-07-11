import { useEffect } from "react";

export function CatchKeys(
    currentItem: number,
    setCurrentItem: Function,
    listToChoose: string[],
    focusingItem?: string,
    setFocusingItem?: Function
) {
    const MovementOnList = (event: KeyboardEvent) => {
        if (event.key === "ArrowDown") {
            setCurrentItem(
                currentItem <= listToChoose.length - 1 ? currentItem + 1 : 0
            );
        }
        if (event.key === "ArrowUp") {
            setCurrentItem(
                currentItem === 0
                    ? -1
                    : currentItem === -1
                    ? listToChoose.length - 1
                    : currentItem - 1
            );
        }
        if (event.key === "Enter") {
            if (
                focusingItem &&
                listToChoose[currentItem] &&
                listToChoose[currentItem].includes(focusingItem)
            ) {
                setFocusingItem && setFocusingItem(listToChoose[currentItem]);
            }
            setCurrentItem(-1);
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", MovementOnList);
        return () => {
            document.removeEventListener("keydown", MovementOnList);
        };
    }, [MovementOnList]);
}
