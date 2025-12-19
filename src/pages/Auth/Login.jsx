import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Заповніть всі поля');
      return;
    }
    setError('Мок-авторизація: дані не зберігаються');
  };

  return (
    <div className="auth">
      <div className="container auth__card">
        <h2>Увійти</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Пароль
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          {error && <div className="auth__error">{error}</div>}
          <button className="btn-primary" type="submit">Увійти</button>
        </form>
        <p className="auth__hint">
          Немає акаунту? <Link to="/register">Зареєструватися</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


