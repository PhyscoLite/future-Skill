import { useEffect, useState, useCallback, type FormEvent } from 'react';
import { Loader2, LogOut, RefreshCw, ShieldCheck, IndianRupee, AlertCircle, Video, X, CheckCircle2 } from 'lucide-react';
import {
  adminLogin,
  adminLogout,
  isAdminAuthed,
  fetchPayments,
  fetchStats,
  sendMeetLink,
  type Payment,
  type PaymentStats,
} from '../api/admin';
import { ApiError } from '../api/client';
import Seo from '../components/Seo';

const STATUS_FILTERS = ['all', 'paid', 'pending', 'failed'] as const;
type StatusFilter = (typeof STATUS_FILTERS)[number];

function statusBadge(status: Payment['status']) {
  const map: Record<Payment['status'], string> = {
    paid: 'bg-green-100 text-green-700 border-green-200',
    pending: 'bg-amber-100 text-amber-700 border-amber-200',
    failed: 'bg-red-100 text-red-700 border-red-200',
  };
  return `inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${map[status]}`;
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await adminLogin(username, password);
      onSuccess();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center mb-3">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-xl font-bold text-blue-900">Admin Login</h1>
          <p className="text-sm text-gray-500">Future Skill dashboard</p>
        </div>
        {error && (
          <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm mb-4">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mb-4"
          placeholder="admin"
          required
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mb-6"
          placeholder="••••••••"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold rounded-xl py-3 transition-colors flex items-center justify-center"
        >
          {loading ? <Loader2 size={20} className="animate-spin" /> : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</p>
      <p className={`text-2xl font-extrabold mt-1 ${accent}`}>{value}</p>
    </div>
  );
}

function SendMeetModal({ payment, onClose, onSent }: { payment: Payment; onClose: () => void; onSent: () => void }) {
  const [meetLink, setMeetLink] = useState(payment.meet_link || '');
  const [message, setMessage] = useState('');
  const [when, setWhen] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      await sendMeetLink(payment.id, { meet_link: meetLink.trim(), message: message.trim(), when: when.trim() });
      onSent();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not send email');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <form onSubmit={submit} className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden my-auto">
        <div className="flex justify-between items-start p-5 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2"><Video size={18} /> Send class link</h3>
            <p className="text-sm text-gray-500">To {payment.student_name || 'student'} &lt;{payment.email || 'no email'}&gt; · {payment.course_name}</p>
          </div>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2 bg-gray-50 rounded-full hover:bg-gray-100">
            <X size={18} />
          </button>
        </div>
        <div className="p-5 space-y-4">
          {error && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {!payment.email && (
            <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
              This student has no email on record — the link can't be sent.
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Google Meet link *</label>
            <input
              value={meetLink}
              onChange={(e) => setMeetLink(e.target.value)}
              type="url"
              placeholder="https://meet.google.com/abc-defg-hij"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">When (optional)</label>
            <input
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              type="text"
              placeholder="e.g. Mon–Fri, 6:00 PM IST starting 20 Jun"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Add any instructions for the student…"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            />
          </div>
        </div>
        <div className="p-5 border-t border-gray-100 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">Cancel</button>
          <button
            type="submit"
            disabled={sending || !payment.email}
            className="px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold flex items-center gap-2"
          >
            {sending ? <Loader2 size={16} className="animate-spin" /> : <Video size={16} />}
            Send email
          </button>
        </div>
      </form>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [stats, setStats] = useState<PaymentStats | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [filter, setFilter] = useState<StatusFilter>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meetFor, setMeetFor] = useState<Payment | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const load = useCallback(async (status: StatusFilter) => {
    setLoading(true);
    setError(null);
    try {
      const [s, p] = await Promise.all([
        fetchStats(),
        fetchPayments(status === 'all' ? undefined : status),
      ]);
      setStats(s);
      setPayments(p.payments || []);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        onLogout();
        return;
      }
      setError(err instanceof ApiError ? err.message : 'Could not load data');
    } finally {
      setLoading(false);
    }
  }, [onLogout]);

  useEffect(() => {
    load(filter);
  }, [filter, load]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-900">Payments Dashboard</h1>
          <p className="text-gray-500">Who enrolled, for which course, and payment status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => load(filter)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard label="Total Orders" value={String(stats.total_orders)} accent="text-blue-900" />
          <StatCard label="Paid" value={String(stats.paid_orders)} accent="text-green-600" />
          <StatCard label="Pending" value={String(stats.pending_orders)} accent="text-amber-600" />
          <StatCard label="Failed" value={String(stats.failed_orders)} accent="text-red-600" />
          <StatCard label="Revenue (₹)" value={`₹${stats.revenue.toLocaleString('en-IN')}`} accent="text-orange-600" />
        </div>
      )}

      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {STATUS_FILTERS.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-colors border ${
              filter === s
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {error && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm mb-4">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="text-left font-semibold px-4 py-3">Student</th>
                <th className="text-left font-semibold px-4 py-3">Contact</th>
                <th className="text-left font-semibold px-4 py-3">Course</th>
                <th className="text-right font-semibold px-4 py-3">Amount</th>
                <th className="text-left font-semibold px-4 py-3">Status</th>
                <th className="text-left font-semibold px-4 py-3">Date</th>
                <th className="text-right font-semibold px-4 py-3">Class link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading && payments.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-gray-400">
                    <Loader2 size={24} className="animate-spin mx-auto" />
                  </td>
                </tr>
              ) : payments.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-gray-400">No payments found.</td>
                </tr>
              ) : (
                payments.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/60">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-gray-900">{p.student_name || '—'}</div>
                      <div className="text-xs text-gray-400">S/o {p.father_name || '—'} · Age {p.age || '—'}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      <div>{p.mobile || '—'}</div>
                      <div className="text-xs text-gray-400">{p.email || '—'}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{p.course_name}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900 whitespace-nowrap">
                      <IndianRupee size={12} className="inline -mt-0.5" />{p.amount.toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3"><span className={statusBadge(p.status)}>{p.status}</span></td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(p.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button
                        onClick={() => setMeetFor(p)}
                        title={p.meet_email_sent_at ? 'Re-send class link' : 'Send class link'}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:border-orange-300 hover:bg-orange-50 transition-colors text-xs font-semibold"
                      >
                        {p.meet_email_sent_at ? <CheckCircle2 size={14} className="text-green-600" /> : <Video size={14} />}
                        {p.meet_email_sent_at ? 'Sent' : 'Send link'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {meetFor && (
        <SendMeetModal
          payment={meetFor}
          onClose={() => setMeetFor(null)}
          onSent={() => {
            const to = meetFor.email;
            setMeetFor(null);
            setToast(`Class link emailed to ${to}`);
            setTimeout(() => setToast(null), 4000);
            load(filter);
          }}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 z-[120] flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg">
          <CheckCircle2 size={18} /> {toast}
        </div>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(isAdminAuthed());

  const handleLogout = () => {
    adminLogout();
    setAuthed(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo title="Admin" path="/admin" description="Future Skill admin dashboard." noindex />
      {authed ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginForm onSuccess={() => setAuthed(true)} />
      )}
    </div>
  );
}
