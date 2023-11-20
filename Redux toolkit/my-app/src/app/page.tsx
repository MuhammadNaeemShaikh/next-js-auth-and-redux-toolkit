'use client';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, increment } from '@/services/redux/slice/userSlice';
import { AppDispatch, RootState } from '@/services/redux/store';

export default function Home() {
  const useref = useRef<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const { entities, loading, value } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (useref.current === false) {
      dispatch(fetchUsers());
    }

    return () => {
      useref.current = true;
    };
  }, []);

  return (
    <main>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {entities.map((item: any, index: number) => (
            <h1 key={index}>{item.name}</h1>
          ))}
          <h1>Value:{value}</h1>
        </div>
      )}

      <button
        className="border-black border-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </main>
  );
}
