import {ISearchFunction} from "./i.search.function";

let customSearch: ISearchFunction;
customSearch = function (source: string, subString: string): boolean {
    let foundIndex = source.search(subString);
    return foundIndex != -1;
};

let match = customSearch('bunch of text', 'text');
console.log(match);