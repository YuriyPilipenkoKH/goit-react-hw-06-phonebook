import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { authOperations } from '../redux/auth';


const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="on">
        <label style={styles.label}>
          Почта
          <input
            type='email'
            name="email"
            value={email}
            onChange={handleChange}
          />
          
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type={show ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
          />
            <button 
            type='button' 
            onClick={() => setShow(!show)}>
              {show ? 'Hide' : 'Show'}
              </button>
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}