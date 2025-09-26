import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    //Halloween🎃, Christmas🎄, St Pattys☘️, July 4🎆, Birthday(Aug10)🎂
    //"☘️","🎆","🎂","🎃","🎄",
    //"🎂","🎄","🎃","🎆","☘️",
    const [HolidayDate] = useState<string[]>(["☘️", "🎆", "🎂", "🎃", "🎄"]);
    const [HolidayAlpha] = useState<string[]>(["🎂", "🎄", "🎃", "🎆", "☘️"]);
    const [current, setCurrent] = useState<string>(HolidayDate[0]);

    function byDate() {
        let index: number = HolidayDate.indexOf(current);
        index = (index + 1) % 5;
        setCurrent(HolidayDate[index]);
    }
    function byAlpha() {
        let index: number = HolidayAlpha.indexOf(current);
        index = (index + 1) % 5;
        setCurrent(HolidayAlpha[index]);
    }
    return (
        <div>
            <div>
                <span>Holiday: {current}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        byAlpha();
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        byDate();
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
