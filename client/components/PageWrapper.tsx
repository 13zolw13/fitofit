import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { FloatingActionButton } from './FloatingButton';
import { HeaderBar } from './HeaderBar';

type PageWrapperProps = {
  children: JSX.Element;
};



export const PageWrapper = ({ children }: PageWrapperProps) => {
  const { pathname } = useRouter();
  const pathWithoutActionButton = ['/', '/auth','/addworkout'];
  const pathWithoutHeadBar = ['/', '/auth'];

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', position: 'relative' }}>
      {!pathWithoutHeadBar.includes(pathname) && <HeaderBar />}
      <Container maxWidth="md" sx={{ p: '1rem 0 1rem' }}>
        {children}
      </Container>
      {!pathWithoutActionButton.includes(pathname) && (
        <FloatingActionButton href="/addworkout" />
      )}
    </Container>
  );
};
