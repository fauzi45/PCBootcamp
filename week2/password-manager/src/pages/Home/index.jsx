import { useNavigate } from 'react-router-dom';

import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import clasess from "./style.module.scss";
import { callAPIJSON } from "../../domain/api";
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await callAPIJSON("/password", "GET");
      console.log(response);
      const modifiedData = response?.map((item) => {
        return {
          id: item?.id,
          provider: item?.provider,
          email: item?.email,
          password: item?.password,
          category: item?.category,
        };
      });
      console.log(modifiedData);
      setData(modifiedData);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetail = (value) => {
    navigate(`/detail/${value}`);
  }

  return (
    <div className={clasess.container}>
      <Typography variant="h3" gutterBottom>
        Password Manager
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Provider</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Category</TableCell>
              <TableCell sx={{ textAlign: "center"}} colSpan={3}>Action</TableCell>
            </TableRow>
          </TableHead>
          {data.length > 0 ? (
            data.map((data, index) => (
              <TableData
                key={index}
                id={index+1}
                email={data.email}
                provider={data.provider}
                category={data.category}
                onDetail={() => handleDetail(data.id)}
              />
            ))
          ) : (
            ""
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
