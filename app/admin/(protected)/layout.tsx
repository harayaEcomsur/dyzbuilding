import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import AdminShell from '@/components/AdminShell'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session?.role) {
    redirect('/admin/login')
  }

  return <AdminShell>{children}</AdminShell>
}
