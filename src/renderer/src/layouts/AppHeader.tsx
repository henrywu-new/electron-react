const { ipcRenderer } = require('electron')
import { Avatar, Button } from '@douyinfe/semi-ui'
import { IconMinus, IconMaximize, IconClose, IconSearch } from '@douyinfe/semi-icons'

const AppHeader = () => {
  // 点击最小化按钮调用的方法
  const minimize = () => {
    console.log('minimize')
    ipcRenderer.send('minimize')
  }
  const maximize = () => {
    console.log('maximize')
    ipcRenderer.send('maximize')
  }
  // 点击关闭按钮调用的方法
  const close = () => {
    console.log('close')
    ipcRenderer.send('close')
  }

  return (
    <>
      <header className="draggable flex flex-none justify-between items-center h-[--app-header-height] sticky top-0 z-[3000]">
        <div>
          <div className="w-[--app-aside-width] flex justify-center">
            <Avatar className="no-drag" size="default" alt="User">
              U
            </Avatar>
          </div>
        </div>
        <div className="no-drag">
          <div className="flex items-center justify-center w-[360px] h-[36px] rounded-full cursor-pointer bg-slate-600 hover:bg-slate-500">
            <IconSearch size="large" />
            <span className="ml-[5px]">搜索（Ctrl+K）</span>
          </div>
        </div>
        <div className="pr-[10px]">
          <Button className="no-drag" icon={<IconMinus />} onClick={minimize} />
          <Button className="no-drag" icon={<IconMaximize />} onClick={maximize} />
          <Button className="no-drag" icon={<IconClose />} onClick={close} />
        </div>
      </header>
    </>
  )
}

export default AppHeader
