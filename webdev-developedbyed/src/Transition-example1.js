import React, { useState, useEffect, useTransition, Suspense } from 'react';

const TransitionExample1 = () => {
  const [data, setData] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      // Simulating data fetching delay
      await new Promise(resolve => setTimeout(resolve, 3000));

      startTransition(() => {
        // Update the data state once the asynchronous operation is complete
        setData({ message: 'Data loaded successfully' });
      });
    };

    fetchData();
  }, []);

  console.log('TRANSITION 1 RENDER', isPending)
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {isPending ? (<h1>Loading...</h1>) : (
        <div>{data?.message}</div>
      )}
    </Suspense>
  );
};

export default TransitionExample1;