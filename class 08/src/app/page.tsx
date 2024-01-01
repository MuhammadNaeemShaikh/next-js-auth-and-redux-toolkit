'use client';
import Nav from '@/component/Nav';
import { useRouter } from 'next/navigation';

export default function Home() {
  const isLoggedIn = true;
  const { push } = useRouter();

  const handleRedirect = () => {
    isLoggedIn ? push('/dashboard') : push('/');
  };
  return (
    <div>
      <Nav pageName="this is Home Page" />
      {isLoggedIn ? <button onClick={handleRedirect}>Dashboard</button> : ''}
    </div>
  );
}
