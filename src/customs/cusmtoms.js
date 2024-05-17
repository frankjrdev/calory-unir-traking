import { Button, styled } from "@mui/system";

export const CustomButton = styled(Button)(() => ({
  customButton: {
    backgroundColor: "#BBF7D0",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#22C55E",
    },
  },
}));
