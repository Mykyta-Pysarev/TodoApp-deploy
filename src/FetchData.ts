import { TodosImport } from "./Interfaces";
import { getRandomRGB } from "./help/rgbRandom";

const fetchData = async () => {
  const url =
    "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json";

  const dataImport = await fetch(url);

  const arr: TodosImport[] = await dataImport.json();

  const getRandomIntInclusive = () => {
    return Math.floor(Math.random() * (255 + 1));
  };

  arr.forEach((element) => {
    element.id = Math.random() * 1000;
    element.completed = element.isCompleted;
    element.background = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
    delete element.isCompleted;
  });

  return arr;
};

export default fetchData;
