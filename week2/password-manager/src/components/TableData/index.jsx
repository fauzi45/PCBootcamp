import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ButtonKotak from "../Button";

const TableData = ({ id, provider, email, category, onDetail, onEdit, onDelete }) => {
  return (
    <TableBody>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{id}</TableCell>
        <TableCell>{provider}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell sx={{ textAlign: "end" }}><ButtonKotak onClick={onDetail} text={"Detail"}/></TableCell>
        <TableCell onClick={onEdit} sx={{ textAlign: "end" }}>
          <EditIcon color="primary" />
        </TableCell>
        <TableCell onClick={onDelete} sx={{ textAlign: "start" }}>
          <DeleteIcon color="primary" />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableData;
