import { apiFetch, setAdminToken, clearAdminToken, getAdminToken } from './client';

export interface Payment {
  id: number;
  order_id: string;
  payment_id: string;
  course_name: string;
  amount: number;
  currency: string;
  student_name: string;
  father_name: string;
  age: number;
  mobile: string;
  email: string;
  qualification: string;
  address: string;
  coordinator_name: string;
  status: 'pending' | 'paid' | 'failed';
  failure_reason?: string;
  paid_at?: string | null;
  meet_link?: string;
  meet_email_sent_at?: string | null;
  created_at: string;
}

export interface PaymentStats {
  total_orders: number;
  paid_orders: number;
  pending_orders: number;
  failed_orders: number;
  revenue: number;
}

interface LoginResponse {
  token: string;
  username: string;
}

interface ListPaymentsResponse {
  payments: Payment[];
  total: number;
  limit: number;
  offset: number;
}

export async function adminLogin(username: string, password: string): Promise<void> {
  const res = await apiFetch<LoginResponse>('/admin/login', {
    method: 'POST',
    body: { username, password },
  });
  setAdminToken(res.token);
}

export function adminLogout(): void {
  clearAdminToken();
}

export function isAdminAuthed(): boolean {
  return !!getAdminToken();
}

export function fetchPayments(status?: string): Promise<ListPaymentsResponse> {
  const qs = status ? `?status=${encodeURIComponent(status)}` : '';
  return apiFetch<ListPaymentsResponse>(`/admin/payments${qs}`, { auth: true });
}

export function fetchStats(): Promise<PaymentStats> {
  return apiFetch<PaymentStats>('/admin/stats', { auth: true });
}

interface SendMeetResponse {
  sent: boolean;
  to: string;
}

export function sendMeetLink(
  paymentId: number,
  data: { meet_link: string; message?: string; when?: string },
): Promise<SendMeetResponse> {
  return apiFetch<SendMeetResponse>(`/admin/payments/${paymentId}/send-meet`, {
    method: 'POST',
    body: data,
    auth: true,
  });
}
