import classNames from 'classnames'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { AiOutlineStar } from 'react-icons/ai'

interface TaskProps {
    data: { id: string, content: string },
    index: number
}


const Task = ({ data, index }: TaskProps) => (
    <Draggable draggableId={data.id} index={index} >
        {
            (provided, snapshot) => (
                <div
                    className={classNames(`p-2 hover:bg-on-sidebar-hover transition-all flex items-center justify-between
                                                                            duration-300 cursor-pointer rounded-md text-sm text-on-sidebar [&.dragging]:cursor-grab
                                                                            [&.dragging]:bg-on-sidebar-hover`, { dragging: snapshot.isDragging })}
                    ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}   >
                    &#128512; {data.content}
                    <div className='flex items-center'>
                        <button><AiOutlineStar className="text-base  mr-1 hover:scale-125 transition-all duration-200" /></button>
                    </div>
                </div>
            )
        }
    </Draggable>
)

export default Task