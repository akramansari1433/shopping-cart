import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

interface product {
   id?: number;
   title?: string;
   description?: string;
   price?: number;
   image?: any;
}

interface modalProp {
   open: boolean;
   handleOpen: React.Dispatch<React.SetStateAction<any>>;
   handleClose: React.Dispatch<React.SetStateAction<any>>;
   setProducts: React.Dispatch<React.SetStateAction<any>>;
}

export default function AddProduct(props: modalProp) {
   const [product, setProduct] = useState<product>();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === "image") {
         let reader = new FileReader();
         if (e.target.files instanceof FileList) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
               setProduct((prevState) => ({
                  ...prevState,
                  image: reader.result,
                  id: new Date().valueOf(),
               }));
            };
         }
      } else if (name === "price") {
         setProduct((prevState) => ({
            ...prevState,
            price: parseFloat(value),
         }));
      } else setProduct((prevState) => ({ ...prevState, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      props.setProducts((prevState: product[]) => [...prevState, product]);
      props.handleClose(true);
      alert("Product added successfully!");
   };

   return (
      <Modal open={props.open} onClose={props.handleClose}>
         <Box sx={style}>
            <Typography variant="h6" component="h2">
               Enter Product Details
            </Typography>
            <form
               onSubmit={handleSubmit}
               style={{ display: "flex", flexDirection: "column" }}
            >
               <TextField name="image" type="file" onChange={handleChange} />
               <TextField
                  type="text"
                  name="title"
                  label="Title"
                  sx={{ marginTop: 2 }}
                  onChange={handleChange}
               />
               <TextField
                  type="text"
                  name="description"
                  label="Description"
                  sx={{ marginTop: 2 }}
                  multiline
                  rows={3}
                  onChange={handleChange}
               />
               <TextField
                  type="number"
                  name="price"
                  label="Price"
                  sx={{ marginTop: 2 }}
                  onChange={handleChange}
               />
               <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                  Add
               </Button>
            </form>
         </Box>
      </Modal>
   );
}
