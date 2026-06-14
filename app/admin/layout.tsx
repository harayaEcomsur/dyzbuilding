import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import AdminSidebar from '@/components/AdminSidebar'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session?.role) redirect('/admin/login')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: '40px 48px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
