import axios from "axios";
import todoApi from "~/todo-api.json";

interface todoItem {
    dateTime: Date,
    id: string,
    assignee: string,
    description: string
}

export const useTodoTableStore = defineStore("todoTableStore", () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: todoApi.apiUrl,
        headers: { 
          'x-api-key': todoApi.apiKey 
        }
    };
      
    const todoTable = reactive([] as todoItem[]);
    const containsItems = (): boolean => {
        return todoTable.length > 0;
    }
  
    const getNewItem = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            axios.request(config)
                .then((response) => {
                    const todoResponse = response.data.todo;

                    const newItem: todoItem = { 
                        dateTime: new Date(todoResponse.dueDateTime),
                        id: todoResponse.id,
                        assignee: todoResponse.assignee,
                        description: todoResponse.description
                    }

                    if (todoTable.find(item => item.id == newItem.id) == undefined) {
                        todoTable.push(newItem)
                        resolve();
                        return;
                    }
                    
                    reject("Opgehaalde taak zat al in de tabel");
                })
                .catch((error) => {
                    reject("Kon geen nieuwe taak ophalen, probeer het later nog eens.");
                });
        })
    }
  
    return { todoTable, getNewItem, containsItems};
  });