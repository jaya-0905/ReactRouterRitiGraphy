import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jaya-0905');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetching data failed', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      {data.followers !== undefined ? (
        <>
          Github followers: {data.followers}
          <img src={data.avatar_url} alt="Git picture" width={300} />
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

export default Github;
