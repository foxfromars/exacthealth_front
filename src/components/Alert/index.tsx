import {
  Alert,
  AlertColor,
  AlertTitle,
} from "@mui/material";

interface Props {
  data: {
    isOpen: boolean;
    message: string;
    type: AlertColor;
  };
  setData: any;
}

export default function AlertComponent({
  data, setData
}: Props) {

  function AlertTitleGenerator(type: AlertColor): string {
    if (type === "success") {
      return "Sucesso";
    }
    else if (type === "error") {
      return "Erro";
    }
    else if (type === "warning") {
      return "Alerta";
    }
    else if (type === "info") {
      return "Info";
    }
    else return "Desconhecido";
  }

  if (
    data.isOpen &&
    data.message
  ) {
    return (
      <Alert
        severity={data.type}
        variant="filled"
        sx={{
          position: "absolute",
          width: "300px",
          height: "80px",
          right: 25,
          bottom: 25,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClose={() => setData({
          ...data,
          message: "",
          open: false,
        })}
      >
        <AlertTitle>{AlertTitleGenerator(data.type)}</AlertTitle>
        {data.message}
      </Alert>
    );
  }
  else return null;
}
