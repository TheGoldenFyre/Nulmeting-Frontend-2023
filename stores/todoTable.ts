interface todoItem {
    dateTime: Date,
    id: string,
    title: string,
    content: string
}

export const useTodoTableStore = defineStore("todoTableStore", () => {
    const todoTable = reactive([] as todoItem[]);
  
    const getNewItem = (): void => {
        // call api
        
        // add new item to the table
        const newItem: todoItem = { 
            dateTime: new Date("2023-05-15T20:23:52.728Z"),
            id: Math.random().toString().slice(2),
            title: "My Todo Task",
            content: "Lorum Ipsum Lorum Ipsum"
        }

        if (todoTable.find(item => item.id == newItem.id) == undefined) {
            todoTable.push(newItem)
        }
    }
  
    return { todoTable, getNewItem };
  });