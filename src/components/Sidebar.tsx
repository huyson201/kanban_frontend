import classNames from 'classnames'
import React, { forwardRef, useMemo, useRef, useState } from 'react'
import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from 'react-beautiful-dnd'

import { AiFillStar, AiFillCaretDown, AiOutlineStar } from 'react-icons/ai'
import { MdOutlineViewKanban } from 'react-icons/md'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import TaskList from './Task/TaskList'


// fake data generator
const getItems = (count: number) =>
    Array.from({ length: count }, (v, k) => k).map(k => (
        {
            id: `item-${k}`,
            content: `item ${k}`
        }
    ));

const reorder = (list: { id: string, content: string }[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result
}

const Sidebar = () => {
    const boardContentRef = useRef<HTMLDivElement>(null)
    const favContentRef = useRef<HTMLDivElement>(null)

    function handleShowDrop(objectRef: React.RefObject<HTMLDivElement>) {
        return () => {
            console.log(!objectRef.current?.style.height)
            if (!objectRef.current) return
            if (objectRef.current.style.height === "0px") {
                objectRef.current.style.height = objectRef.current.scrollHeight + "px"
                return
            }
            objectRef.current.style.height = "0px"
        }
    }

    return (
        <div className="h-full flex flex-col text-on-sidebar w-[var(--sidebar-width)] bg-sidebar-bg py-6">
            <h1 className="uppercase font-semibold px-4 pb-1 text-2xl italic border-b border-on-sidebar ">Kanban</h1>
            <div className="p-4 h-[calc(100%_-_32px_-_37px)] overflow-y-auto sidebar-task-list">
                <div>
                    <div className="text-sm text-[#6e6e6e] flex items-center justify-between font-medium">
                        <div className='flex items-center'>
                            <AiFillStar className="text-base text-[#ffca28] mr-1" /> Favorites
                        </div>
                        <button onClick={handleShowDrop(favContentRef)} className='p-2 transition-all duration-300 rounded-md hover:bg-on-sidebar-hover text-base'><AiFillCaretDown /></button>
                    </div>
                    {/* fav content */}
                    <TaskList type='favorites' ref={favContentRef} />
                </div>

                {/* board */}
                <div className='mt-2'>
                    <div className="text-sm text-[#6e6e6e] flex items-center justify-between font-medium">
                        <div className='flex items-center'>
                            <MdOutlineViewKanban className="text-base  mr-1" /> Your boards
                        </div>
                        <button onClick={handleShowDrop(boardContentRef)} className='p-2 rounded-md hover:bg-on-sidebar-hover text-base'><AiFillCaretDown /></button>
                    </div>
                    {/* board content */}
                    <TaskList type='board' ref={boardContentRef} />
                </div>
            </div>

            {/* user info */}
            <div className='w-full flex justify-between items-center mt-auto px-4'>
                <div className='flex items-center'>
                    <img className='w-8 h-8 rounded-full' src="https://ui-avatars.com/api/name=son+nguyen" alt="avatar" />
                    <span className='text-on-sidebar text-base font-medium  ml-2'>Son Nguyen</span>
                </div>
                <button className='text-xl text-on-sidebar rounded-md hover:bg-on-sidebar-hover w-8 h-8 flex
                                    justify-center items-center'>
                    <RiLogoutCircleRLine />
                </button>
            </div>
        </div>
    )
}





export default Sidebar