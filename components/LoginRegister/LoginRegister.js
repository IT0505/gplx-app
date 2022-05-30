import styles from './LoginRegister.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Link from 'next/link';
import { NormalButton } from '../Button/Button';
import { RedErrorMessage } from '../CustomMessage/CustomMessage';

import { APILogin } from '../../api/userApi';
import { APIRegister } from '../../api/userApi';

import useToken from '../../api/useToken';
import { useRouter } from 'next/router';

const MDLogin = {
  title: 'Sát hạch GPLX (SHG)',
  title1:
    'Website giúp bạn ôn tập các câu hỏi lý thuyết của bằng lái loại A1, A2',
};

import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const LoginSection = () => {
  const router = useRouter();
  const { title, title1 } = MDLogin;
  const { saveToken } = useToken();

  const handleLogin = (values) => {
    APILogin(values).then((res) => {
      if (res.data !== -1) {
        saveToken(res.data);
        router.push('/home');
      } else {
        window.alert('User not exist!');
      }
    });
  };

  return (
    <div className={`${styles.loginRegister} overlay`}>
      <div className='container'>
        <div className={styles.loginRegisterInner}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.title}>{title1}</h3>
          </div>
          <div className={styles.rightContent}>
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={async (values) => handleLogin(values)}
            >
              <Form className={styles.loginForm}>
                <Field
                  id='username'
                  name='username'
                  placeholder='Tên đăng nhập'
                  className={styles.loginInput}
                />
                <ErrorMessage
                  name='username'
                  component={RedErrorMessage}
                ></ErrorMessage>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Mật khẩu'
                  className={styles.loginInput}
                />
                <ErrorMessage
                  name='password'
                  component={RedErrorMessage}
                ></ErrorMessage>
                <div className={styles.funcWrap}>
                  <div className={styles.rightWrap}>
                    <NormalButton type='submit' className={styles.submitButton}>
                      Đăng Nhập
                    </NormalButton>
                    <Link href='/register'>
                      <a className={styles.register}>Đăng ký</a>
                    </Link>
                  </div>
                  <Link href='/'>
                    <a className={styles.forgetPassword}>Quên mật khẩu</a>
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RegisterSection = () => {
  const router = useRouter();
  const { title, title1 } = MDLogin;
  const { saveToken } = useToken();

  const handleRegister = (values) => {
    APIRegister(values).then((res) => {
      if (res.data !== -1) {
        saveToken(res.data);
        router.push('/home');
      } else {
        window.alert('Username existed!!!');
      }
    });
  };

  return (
    <div className={`${styles.loginRegister} overlay`}>
      <div className='container'>
        <div className={styles.loginRegisterInner}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.title}>{title1}</h3>
          </div>
          <div className={styles.rightContent}>
            <Formik
              initialValues={{
                username: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={RegisterSchema}
              onSubmit={async (values) => handleRegister(values)}
            >
              <Form className={styles.loginForm}>
                <Field
                  id='username'
                  name='username'
                  placeholder='Tên đăng nhập'
                  className={styles.loginInput}
                />
                <ErrorMessage
                  name='username'
                  component={RedErrorMessage}
                ></ErrorMessage>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Mật khẩu'
                  className={styles.loginInput}
                />
                <ErrorMessage
                  name='password'
                  component={RedErrorMessage}
                ></ErrorMessage>
                <Field
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder='Xác nhận mật khẩu'
                  className={styles.loginInput}
                />
                <ErrorMessage
                  name='confirmPassword'
                  component={RedErrorMessage}
                ></ErrorMessage>
                <div className={styles.funcWrap}>
                  <div className={styles.rightWrap}>
                    <NormalButton type='submit' className={styles.submitButton}>
                      Đăng ký
                    </NormalButton>
                    <Link href='/login'>
                      <a className={styles.register}>Đăng Nhập</a>
                    </Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
