import React, { createContext, useContext, useState } from 'react';
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';

const SidebarContext = createContext({expanded: true});

export function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="w-1/6 h-screen">
            <nav className={`h-full ${expanded ? "w-full" : "w-fit"} flex flex-col bg-white border-r shadow-sm`}>
                <div className={`p-4 pb-2 flex ${expanded ? "justify-end" : "justify-center"} items-center`}>
                    <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronFirst /> : <ChevronLast/>}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className={`border-t flex ${expanded ? "" : "justify-center"} p-2 items-center`}>
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div className={`
                        flex justify-between items-center
                        overflow-hidden transition-all ${expanded ? "flex-1 ml-3" : "w-0"}
                    `}>
                        <div className="leading-5">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <MoreVertical size={30}/>
                    </div>                    
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, main, others }) {
    const {expanded} = useContext(SidebarContext);
    return (
        <li className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${
                active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }
        `} onClick={() => {
            main && main(true);
            others && others.map(other => other(false))
        }}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "flex-1 ml-3" : "w-0"}`}>{text}</span>

            {!expanded && (
                <div className={`
                        absolute left-full rounded-md px-2 py-1 ml-6
                        bg-indigo-100 text-indigo-800 text-sm
                        invisible opacity-20 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:-translate-x-0
                    `}>
                    {text}
                </div>
            )}
        </li>
    );
}