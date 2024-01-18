import Button from "@mui/material/Button";

const ButtonKotak = ({ text, onClick, icon }) => {
  return (
    <Button startIcon={icon} onClick={onClick} variant="outlined">
      {text}
    </Button>
  );
};

export default ButtonKotak;
