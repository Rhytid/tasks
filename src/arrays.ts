/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    let length: number = numbers.length;
    let newArray: number[] = [numbers[0], numbers[length - 1]];
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let triple: number[] = [...numbers];
    triple = triple.map((trip: number): number => trip * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newNum: string[] = [...numbers];
    let converted: number[] = [];
    converted = newNum.map((index: string): number =>
        isNaN(parseInt(index)) ? 0 : parseInt(index),
    );
    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newNum: string[] = [...amounts];
    let convert1: string[] = [];
    convert1 = newNum.map((index: string): string => index.replace("$", ""));
    let tempArr: string[] = [...convert1];
    let convert2: number[] = [];
    convert2 = tempArr.map((index: string): number =>
        isNaN(parseInt(index)) ? 0 : parseInt(index),
    );
    return convert2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let msgClone: string[] = [...messages];

    msgClone = msgClone.filter(
        (index: string): boolean => !index.includes("?"),
    );

    msgClone = msgClone.map((index: string): string =>
        index.includes("!") ? index.toUpperCase() : index,
    );
    return msgClone;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let wrdClone: string[] = [...words];
    wrdClone = wrdClone.filter((index: string): boolean => index.length < 4);

    return wrdClone.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let clrClone: string[] = [...colors];
    let RGB: boolean = false;
    RGB = clrClone.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return RGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let addClone: number[] = [...addends];
    let sum: number = 0;
    sum = addClone.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let finalstring: string = sum.toString() + "=";
    if (addClone.length === 0) {
        finalstring += "0";
    } else {
        finalstring += addClone.join("+");
    }

    return finalstring;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let valClone: number[] = [...values];
    let sum: number = 0;
    sum = valClone.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let ifneg = valClone.every((index: number): boolean => index > 0);
    if (ifneg) {
        valClone = [...valClone, sum];
        return valClone;
    }
    let negIndex = valClone.findIndex((index: number): boolean => index < 0);

    let valC2 = [...valClone];
    valC2 = valC2.slice(0, negIndex);

    let sum2: number = 0;
    sum2 = valC2.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );

    valClone.splice(negIndex + 1, 0, sum2);
    return valClone;
}
