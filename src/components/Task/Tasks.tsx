import React from 'react'
import Task from './Task'

interface TaskListProps {
    tasks: { id: string, content: string }[]
}

const Tasks = ({ tasks }: TaskListProps) => {
    return (
        <>
            {
                tasks.map((value, index) => <Task key={value.id + Math.random()} data={value} index={index} />)
            }
        </>
    )
}

export default React.memo(Tasks)