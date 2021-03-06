import AddIcon from '@mui/icons-material/Add';
import { Box, Fab } from "@mui/material";
import Link from "next/link";

type FloatingActionButtonProps = {
  href: string;
}

export const FloatingActionButton = ({href}: FloatingActionButtonProps) => {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
        position: 'absolute',
        right: '1rem',
        bottom: '1rem',
      }}
    >
      <Link href={href}>
        <a>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </a>
      </Link>
    </Box>
  );
};
