import TaskCard from "./TaskCard/TaskCard"

function TaskContainer(){
    return(
        <section className="flex flex-col gap-3 my-10">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />

        </section>

        
        

    )
}

export default TaskContainer