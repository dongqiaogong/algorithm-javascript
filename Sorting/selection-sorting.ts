const selectionSorting = (arr: Array<number>) => {
    let temp: number;
    let minIndex: number;
    for ( let i: number = 0; i < arr.length; i++) {
        minIndex = i;
        for ( let j: number = i + 1; j < arr.length; j++) {
            if ( arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

const main = () => {
    const arr: Array<number> = [2,5,9,3,4,4,6,8,7,1];
    selectionSorting(arr);
    console.log(arr.toString());
}

main();

