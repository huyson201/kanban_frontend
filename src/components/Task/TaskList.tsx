import { forwardRef, useState } from "react"
import { DragDropContext, Droppable, OnDragEndResponder } from "react-beautiful-dnd"
import reorderTask from "../../helpers/reorderTask"
import Tasks from "./Tasks";

// fake data items
const getItems = (count: number) =>
    Array.from({ length: count }, (v, k) => k).map(k => (
        {
            id: `item-${k}`,
            content: `item ${k}`
        }
    ));


interface TaskListProps {
    type: "board" | "favorites"
}
const TaskList = forwardRef<HTMLDivElement, TaskListProps>((props, ref) => {
    const [items, setItems] = useState(getItems(10))

    const onDragEnd: OnDragEndResponder = ({ destination, source }) => {
        if (!destination) return
        const newItems = reorderTask(items, source.index, destination.index)
        setItems(newItems)
    }


    return (
        <div className='overflow-hidden transition-all duration-300 ' ref={ref}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={props.type}>
                    {
                        (provided) => (
                            <div className="py-1"  {...provided.droppableProps} ref={provided.innerRef}>
                                {<Tasks tasks={items} />}
                                {provided.placeholder}
                            </div>
                        )

                    }
                </Droppable>
            </DragDropContext>
        </div>
    )
})


export default TaskList