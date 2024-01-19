import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

import ButtonKotak from "../Button";
import { callAPIJSON } from "../../domain/api";

const TableData = ({ datas, fetchData }) => {
  const navigate = useNavigate();
  const handleDetail = (value) => {
    navigate(`/detail/${value}`);
  };

  const handleIsDelete = async (value) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(value);
      }
    });
  };

  const handleDelete = async (value) => {
    try {
      await callAPIJSON(`/password/${value}`, "delete");
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      fetchData();
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Category</TableCell>
            <TableCell sx={{ textAlign: "center" }} colSpan={3}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.length > 0 ? (
            datas.map((data, index) => {
              return (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{data.provider}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.category}</TableCell>
                  <TableCell sx={{ textAlign: "end" }}>
                    <ButtonKotak
                      onClick={() => handleDetail(data.id)}
                      text={"Detail"}
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => handleIsDelete(data.id)}
                    sx={{ textAlign: "start" }}
                  >
                    <DeleteIcon color="primary" />
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">Data Tidak ada</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
