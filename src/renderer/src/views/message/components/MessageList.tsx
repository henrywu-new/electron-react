import { Avatar } from '@douyinfe/semi-ui'

const MessageList = () => {
  const list = new Array(50).fill('')

  return (
    <ul className="h-full w-[260px] overflow-y-auto p-[10px]">
      {list.map((item, index) => (
        <li
          key={index}
          className={`flex items-center px-[10px] py-[5px] hover:bg-white hover:bg-opacity-5 rounded-[4px] cursor-pointer ${
            index > 0 ? 'mt-[2px]' : null
          }`}
        >
          <Avatar size="small" alt="User" className="flex-none">
            U
          </Avatar>
          <div className="flex-auto px-[10px] overflow-hidden">
            <h1 className="text-white text-[14px] truncate">用户名/群名</h1>
            <p className="text-gray-500 text-[12px] truncate">用户发送最新消息用户发送最新消息</p>
          </div>
          <div className="flex-none self-start">
            <span className="text-gray-500 text-[12px]">20:18</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MessageList
