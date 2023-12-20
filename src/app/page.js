'use client';
import 'bulma/css/bulma.min.css';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import setAuthToken from './utils/setAuthToken';

// we are going to be fetching data from our API and displaying it on
// the page

export default function Home() {
  // state is what the data is representing in realtime
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [age, setAge] = useState(null);
  const [name, setName] = useState('Dylan');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movies/now-playing`)
      .then((res) => res.json())
      .then((data) => {
        // data is an object
        console.log('data', data)
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data shown...</p>;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Any Time Flix</h1>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Rating</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((movie) => (
            console.log('movie', movie),
            <tr key={movie.id}>
              <td>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={200}
                  height={300}
                />
              </td>
              <td>{movie.vote_average}</td>
              <td>{movie.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
