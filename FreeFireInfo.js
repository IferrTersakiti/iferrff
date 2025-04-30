import React, { useState } from 'react';

const FreeFireInfo = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Info Seputar Game Free Fire</h1>

      <section>
        <h2>Apa itu Free Fire?</h2>
        <p>
          Free Fire adalah game battle royale yang dikembangkan oleh 111 Dots Studio dan diterbitkan oleh Garena.
        </p>
      </section>

      <section>
        <h2>Karakter Populer</h2>
        <ul>
          <li>Chrono</li>
          <li>Alok</li>
          <li>K</li>
          <li>Kelly</li>
        </ul>
      </section>

      <section>
        <h2>Tips Bermain</h2>
        <ol>
          <li>Ambil posisi tinggi</li>
          <li>Gunakan karakter sesuai gaya main</li>
          <li>Perhatikan zona aman</li>
          <li>Komunikasi dengan tim</li>
        </ol>
      </section>

      <section>
        <h2>Komentar Pengunjung</h2>
        {comments.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Tulis komentar kamu...">
        </textarea>
        <br />
        <button onClick={handleCommentSubmit}>Kirim Komentar</button>
      </section>
    </div>
  );
};

export default FreeFireInfo;