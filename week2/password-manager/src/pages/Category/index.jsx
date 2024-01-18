import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { callAPIJSON } from "../../domain/api";
import TableData from "../../components/TableData";

const Category = () => {
    const { category } = useParams();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await callAPIJSON(`/password?category=${category}`, "GET");
            console.log(response);
            setData(response);
        } catch (error) {
            console.error("Error fetching favorites:", error);
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
            <TableData datas={data} />
        </div>
    )
}

export default Category;