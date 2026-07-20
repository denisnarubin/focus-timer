import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db/index"
import TaskCard from "./TaskCard/TaskCard"


function TaskContainer(){
    const tasks = useLiveQuery(() => db.tasks.toArray());

    return(
        <section className="flex flex-col gap-3 my-10">
          {tasks?.map(({id, category, title})=><TaskCard key = {id} title = {title} category={category}/>)}


        </section>

        
        

    )
}

export default TaskContainer