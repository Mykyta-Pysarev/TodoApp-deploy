export interface Itodos {
    text: string,
    completed:boolean,
    id:number,
    createdAt:string,
    background:string,
  }

  export interface TodosImport {
    text: string,
    completed?:boolean,
    isCompleted?:boolean,
    id:number,
    createdAt:Date,
    background:string,
  }