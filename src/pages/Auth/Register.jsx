import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError('Заповніть всі поля');
      return;
    }
    if (password !== confirm) {
      setError('Паролі не співпадають');
      return;
    }
    setError('Мок-реєстрація: дані не зберігаються');
  };

  return (
    <div className="auth">
      <div className="container auth__card">
        <h2>Реєстрація</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Пароль
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <label>
            Підтвердження паролю
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          </label>
          {error && <div className="auth__error">{error}</div>}
          <button className="btn-primary" type="submit">Зареєструватися</button>
        </form>
        <p className="auth__hint">
          Вже є акаунт? <Link to="/login">Увійти</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;


