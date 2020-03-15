import styled from 'styled-components';
import format from 'date-fns/format';
import Link from 'next/link';

const FooterContent = styled.div`
  margin-top: 64px;
  text-align: center;
  font-size: 0.8rem;
  color: #9e9e9e;
`;

export default function Footer() {
  return (
    <FooterContent>
      Inspired by &nbsp;
      <a
        href='https://wesbos.com/'
        style={{ textDecoration: 'none', color: 'rgb(33,150,243)' }}>
        <i class='fas fa-crown'></i> Wes Bos
      </a>
      &nbsp; | Data pulled from an API by &nbsp;
      <a
        href='https://github.com/mathdroid/covid-19-api'
        style={{ textDecoration: 'none', color: 'rgb(33,150,243)' }}>
        <i class='fab fa-github'></i> mathdroid
      </a>
      &nbsp; | Built with &nbsp;
      <a
        href='https://nextjs.org/'
        style={{ textDecoration: 'none', color: 'rgb(33,150,243)' }}>
        <i class='fab fa-react'></i> Next.js
      </a>
      &nbsp; | Deployed to &nbsp;
      <a
        href='https://zeit.co/home'
        style={{ textDecoration: 'none', color: 'rgb(33,150,243)' }}>
        <i class='fas fa-server'></i> Now.sh
      </a>
    </FooterContent>
  );
}
