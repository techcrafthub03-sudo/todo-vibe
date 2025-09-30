'use client';

import { ClipboardCheck } from 'lucide-react';
import { useAuth } from '@/lib/auth';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="flex items-center justify-between mb-10">
      <div className="flex items-center">
        <ClipboardCheck className="h-10 w-10 text-gray-700 mr-4" />
        <h1 className="text-5xl font-bold text-gray-800">
          Todo Focus
        </h1>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Welcome, {user.displayName}</span>
          <button onClick={signOut} className="btn-secondary">
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
}
