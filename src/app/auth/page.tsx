'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { FcGoogle } from 'react-icons/fc';

export default function AuthPage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Todo Focus</h1>
        <p className="text-gray-600 mb-8">Sign in to manage your tasks</p>
        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="btn-primary flex items-center justify-center w-full"
        >
          <FcGoogle className="h-6 w-6 mr-3" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
