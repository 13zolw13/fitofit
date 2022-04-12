import { Container } from "@mui/material";
import { FloatingActionButton } from "./FloatingButton";
import { useRouter } from 'next/router';
import { HeaderBar } from "./HeaderBar";

type PageWrapperProps = {
  children: JSX.Element;
}


export const PageWrapper = ({children}: PageWrapperProps) => {
  const { pathname } = useRouter();
  console.log(pathname);
  const pathWithoutActionButton = "/addworkout";

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', position: 'relative' }}>
      <HeaderBar />
      {children}
      {pathname !== pathWithoutActionButton && (
        <FloatingActionButton href="/addworkout" />
      )}
    </Container>
  );
}