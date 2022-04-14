import { CircularProgress,Stack } from "@mui/material";

export const Loader = () => (
  <Stack direction="row" justifyContent="center" sx={{padding: '2rem 0 '}}><CircularProgress /></Stack>
)