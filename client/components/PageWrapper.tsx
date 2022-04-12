import { Box, Container, Fab } from "@mui/material";
import { FloatingActionButton } from "./FloatingButton";
import Link from 'next/link'

type PageWrapperProps = {
  children: JSX.Element;
}


export const PageWrapper = ({children}: PageWrapperProps) => {

  return (
    <Container maxWidth="md" sx={{minHeight: '100vh', position: 'relative'}}>
      {children}
      <FloatingActionButton href="/addworkout"/>
    </Container>
  )
}