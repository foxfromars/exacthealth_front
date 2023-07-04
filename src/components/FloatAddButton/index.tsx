import {
  Button,
} from "@mui/material";

import {
  Add as AddIcon,
} from "@mui/icons-material";

interface Props {
  onClick: any;
  x: number;
  y: number;
}

export default function FloatAddButton({
  onClick,
  x,
  y,
}: Props) {

  return (
    <Button
      sx={{
        display: "flex",
        position: "absolute",
        right: x,
        bottom: y,
      }}
      variant="contained"
      onClick={onClick}
    >
      <AddIcon />
    </Button>
  );
}
