import { Container } from "@mui/material";

type PageWrapperProps = {
  children: JSX.Element;
}

export const PageWrapper = ({children}: PageWrapperProps) => {
  return (
    <Container maxWidth="md">
      {children}

    </Container>
  )
}