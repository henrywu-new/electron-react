import { NavLink } from 'react-router-dom'
import { Badge } from '@douyinfe/semi-ui'

import {
  IconComment,
  IconUserCircle,
  IconUserGroup,
  IconMore,
  IconComponent
} from '@douyinfe/semi-icons'
import { useState } from 'react'

const AppAside = () => {
  const tabs = [
    {
      title: '消息',
      icon: IconComment,
      path: '/'
    },
    {
      title: '联系人',
      icon: IconUserCircle,
      path: '/'
    },
    {
      title: '加入群聊',
      icon: IconUserGroup,
      path: '/'
    },
    {
      title: '朋友圈',
      icon: IconComponent,
      path: '/'
    },
    {
      title: '更多',
      icon: IconMore,
      path: '/'
    }
  ]

  const [activeId, setActiveId] = useState('')

  return (
    <aside className="flex-none w-[--app-aside-width]">
      <ul className="flex flex-col items-center w-full">
        {tabs.map((item, index) => (
          <li key={item.title} className={`${index > 0 ? ' mt-[2px]' : null}`}>
            <NavLink to={item.path}>
              <button
                className={`flex flex-col w-[58px] h-[58px] items-center justify-center pt-[6px] rounded cursor-pointer hover:bg-slate-800 ${
                  activeId == item.title ? 'bg-slate-800' : null
                }`}
                onClick={() => setActiveId(item.title)}
              >
                <Badge count={1} type="danger">
                  <item.icon size="large" />
                </Badge>
                <span className="text-[10px]">{item.title}</span>
              </button>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default AppAside
