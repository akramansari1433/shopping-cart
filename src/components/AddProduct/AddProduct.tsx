import React, { Dispatch, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/ProductActions";

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

interface modalProp {
   open: boolean;
   handleOpen: React.Dispatch<React.SetStateAction<any>>;
   handleClose: React.Dispatch<React.SetStateAction<any>>;
}

export default function AddProduct(props: modalProp) {
   const [id] = useState<number>(new Date().valueOf());
   const [image, setImage] = useState<any>();
   const [title, setTitle] = useState<string>();
   const [description, setDescription] = useState<string>();
   const [price, setPrice] = useState<number>();

   const dispatch: Dispatch<any> = useDispatch();

   const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      let reader = new FileReader();
      if (e.target.files instanceof FileList) {
         reader.readAsDataURL(e.target.files[0]);
         reader.onload = () => {
            setImage(reader.result);
         };
      }
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
         addProduct({
            id,
            title: title!,
            description: description!,
            image,
            price: price!,
         })
      );
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
               <input
                  style={{ marginTop: 10 }}
                  accept="image/*"
                  name="image"
                  type="file"
                  onChange={handleImage}
                  required
               />
               <TextField
                  type="text"
                  name="title"
                  label="Title"
                  sx={{ marginTop: 2 }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setTitle(e.target.value)
                  }
                  required
               />
               <TextField
                  type="text"
                  name="description"
                  label="Description"
                  sx={{ marginTop: 2 }}
                  multiline
                  rows={3}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setDescription(e.target.value)
                  }
                  required
               />
               <TextField
                  type="number"
                  name="price"
                  label="Price"
                  sx={{ marginTop: 2 }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setPrice(parseInt(e.target.value))
                  }
                  required
               />
               <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                  Add
               </Button>
            </form>
         </Box>
      </Modal>
   );
}
