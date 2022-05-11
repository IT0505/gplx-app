import { createContext, useEffect } from 'react';
import '../styles/global.scss';
import Script from 'next/script';

import {
  fadeIn,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
  zoomIn,
} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const classes = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: '1s',
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: '1s',
  },
  zoomIn: {
    animationName: zoomIn,
    animationDuration: '1s',
  },
});

export const LoginContext = createContext();

function MyApp({ Component, pageProps }) {
  const animationList = [
    'fadeIn',
    'fadeInRight',
    'fadeInLeft',
    'fadeInUp',
    'zoomIn',
  ];
  const customAnimations = (classList) => {
    for (let i = 0; i < animationList.length; i++) {
      if (classList.contains(animationList[i])) {
        return animationList[i];
      }
    }

    return 'fadeIn';
  };
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate')) {
              entry.target.style.visibility = 'visible';
              entry.target.classList.add(
                css(classes[customAnimations(entry.target.classList)])
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    document.querySelectorAll('div').forEach((div) => {
      observer.observe(div);
    });
  });

  return (
    <LoginContext.Provider value={{ login: false }}>
      <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></Script>
      <Script
        src='https://kit.fontawesome.com/397c67969c.js'
        crossOrigin='anonymous'
      ></Script>
      <link
        rel='stylesheet'
        href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'
      ></link>
      <Component {...pageProps} />
    </LoginContext.Provider>
  );
}

export default MyApp;
