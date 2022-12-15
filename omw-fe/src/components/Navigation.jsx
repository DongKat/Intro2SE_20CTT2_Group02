import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Navigation({ navItems }) {
  const [activeId, setActiveId] = useState(navItems[0].id);
  return (
    <>
      <div className="rounded-tr-3xl rounded-br-3xl shadow-xl shadow-emerald-600 w-20 flex flex-col items-center justify-center h-full bg-emerald-600 gap-4">
        {navItems.map(({ id, icon, route }) => (
          <Link key={id} to={route}>
            <div
              className={`${
                activeId === id ? 'bg-emerald-400' : ''
              } w-14 h-14 flex items-center justify-center rounded-xl cursor-pointer`}
              onClick={() => setActiveId(id)}
            >
              <Icon icon={icon} className="text-4xl text-white" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
