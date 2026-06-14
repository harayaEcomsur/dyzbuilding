import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import AdminSidebar from '@/components/AdminSidebar'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session?.role) {
    redirect('/admin/login')
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>
      <AdminSidebar />
      <main style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
