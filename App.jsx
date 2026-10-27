import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('landing');
  const [isAdmin, setIsAdmin] = useState(false);

  const movies = [
    { id: 1, title: 'OG', release: 'Sep 25, 2025', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Baahubali 2', release: 'Apr 28, 2017', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'RRR', release: 'Mar 25, 2022', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'RajaSaab', release: 'Dec 5, 2025', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Toxic', release: 'Oct 1, 2025', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div style={{ backgroundColor: '#0b1120', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
        <h1 style={{ color: '#ef4444', margin: 0 }}>iMovies</h1>
        <div>
          <button onClick={() => setPage('landing')} style={btnStyle}>Home</button>
          <button onClick={() => setPage('movies')} style={btnStyle}>Movies</button>
          <button onClick={() => setPage('login')} style={btnStyle}>Login</button>
          <button onClick={() => setPage('register')} style={btnStyle}>Register</button>
        </div>
      </nav>

      {/* Pages */}
      {page === 'landing' && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>Welcome to iMovies</h2>
          <p style={{ color: '#94a3b8' }}>Your ultimate destination for the latest blockbusters and timeless classics</p>
          <button onClick={() => setPage('login')} style={{ ...btnStyle, backgroundColor: '#ef4444', border: 'none' }}>Sign In</button>
          <button onClick={() => setPage('register')} style={btnStyle}>Sign Up</button>
        </div>
      )}

      {page === 'movies' && (
        <div>
          <h2 style={{ backgroundColor: '#ef4444', padding: '10px', borderRadius: '5px' }}>Available Movies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {movies.map(m => (
              <div key={m.id} style={{ backgroundColor: '#1e293b', padding: '10px', borderRadius: '8px' }}>
                <img src={m.image} alt={m.title} style={{ width: '100%', borderRadius: '5px' }} />
                <h3>{m.title}</h3>
                <p style={{ fontSize: '12px', color: '#94a3b8' }}>{m.release}</p>
                <button style={{ width: '100%', backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>Book Ticket</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {(page === 'login' || page === 'register') && (
        <div style={{ maxWidth: '350px', margin: '40px auto', backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h2>{page === 'login' ? 'Login' : 'Register'}</h2>
          <input type="email" placeholder="Enter your email" style={inputStyle} />
          <input type="password" placeholder="Enter password" style={inputStyle} />
          <button style={{ width: '100%', backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

const btnStyle = { color: '#fff', backgroundColor: 'transparent', border: '1px solid #334155', padding: '8px 16px', borderRadius: '4px', margin: '0 5px', cursor: 'pointer' };
const inputStyle = { width: '100%', padding: '10px', margin: '8px 0', borderRadius: '4px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' };