import React from 'react';


async function fetchData() {

    let url = 'https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json'

    let dataImport = await fetch(url);

    let arr = await dataImport.json();

    arr.forEach(element => {
        element.completed = element.isCompleted;
        delete element.isCompleted;
        console.log(element);
    });

    return arr;


}

export default fetchData;
