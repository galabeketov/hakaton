import React, { useState } from "react";
import Container from "@mui/material/Container";
import { FileUploader } from "react-drag-drop-files";
import "./style.css";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const fileTypes = ["JPG", "PNG", "GIF"];

function TForm() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmit)} className="upload-image">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          classes="drag-drop-files"
        />
        <Button className="upload" type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default TForm;
