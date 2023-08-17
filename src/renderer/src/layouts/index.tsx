import AppHeader from '@/layouts/AppHeader'
import AppAside from '@/layouts/AppAside'

const AppLayout = ({ children }) => {
  console.log(children)
  return (
    <div className="app-layout h-screen w-screen flex flex-col overflow-hidden">
      <AppHeader></AppHeader>
      <section className="flex flex-auto overflow-hidden">
        <AppAside />
        <main className="h-full w-full overflow-auto bg-neutral-800 rounded-tl-[8px]">
          {children}
        </main>
      </section>
    </div>
  )
}

export default AppLayout
