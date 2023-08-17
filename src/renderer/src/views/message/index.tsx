import { Input, Divider, Avatar } from '@douyinfe/semi-ui'
import MessageList from './components/MessageList'

const Message = () => {
  return (
    <section className="flex w-full h-full">
      <MessageList />
      <div className="flex flex-col flex-auto h-full bg-[#1e1e1e]">
        <div className="flex flex-col flex-auto overflow-hidden">
          <div className="flex items-center flex-none h-[60px] px-[20px]">
            <Avatar size="default" alt="User" className="flex-none">
              U
            </Avatar>
            <div className="flex-auto px-[10px] overflow-hidden">
              <h1 className="text-white text-[14px] truncate">用户名/群名</h1>
            </div>
          </div>
          <Divider className="flex-none" />
          <div className="flex-auto px-[20px] overflow-y-auto">
            <div className="h-[1000px]"></div>
          </div>
        </div>

        <div className="mb-[30px] px-[20px]">
          <Input placeholder="发送消息" size="large"></Input>
        </div>
      </div>
    </section>
  )
}

export default Message
