import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { FloatingActionButton } from './FloatingButton';
import { HeaderBar } from './HeaderBar';

type PageWrapperProps = {
  children: JSX.Element;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const { pathname } = useRouter();
  const pathWithoutActionButton = '/addworkout';

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', position: 'relative' }}>
      <HeaderBar />
      <Container maxWidth="md" sx={{ p: '1rem 0 1rem' }}>
        {children}
      </Container>
      {pathname !== pathWithoutActionButton && (
        <FloatingActionButton href="/addworkout" />
      )}
    </Container>
  );
};
