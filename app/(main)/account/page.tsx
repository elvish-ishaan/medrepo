"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the profile page
    router.push('/account/profile');
  }, [router]);

  return null; // or you can show a loading spinner while redirecting
};

export default page;
