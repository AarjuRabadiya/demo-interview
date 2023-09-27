import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Modal,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Home = () => {
  const route = useLocation();
  const navigate = useNavigate();
  const pathName = route.pathname;
  const [selected, setSelected] = useState("1");
  const [open, isOpen] = useState(false);
  return (
    <Container maxWidth="sm">
      <Box display={"flex"} alignItems={"center"} className="mt-10 mb-20">
        {pathName.includes("edit") && (
          <ArrowBackIosIcon
            fontSize="20"
            onClick={() => {
              navigate(-1);
            }}
            className="c-pointer"
          />
        )}
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          My Bio
        </Typography>
      </Box>
      <Box className="mb-10">
        {pathName.includes("edit") ? (
          <>
            <Box sx={{ fontWeight: 500 }}>Write something about youself?</Box>

            <TextareaAutosize
              minRows={3}
              placeholder="Write something about you"
              className="w-select br-10 p-10 mt-4"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua."
            />
          </>
        ) : (
          <>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box className="fw-bold">About Me </Box>
              <EditIcon
                fontSize="20"
                className="c-pointer"
                onClick={() => {
                  navigate("/edit");
                }}
              />
            </Box>
            <Box className="p-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Box>
            {/* <Box className="p-10" textAlign={"center"} color={"#ccc"}>
              No about me added yet
            </Box> */}
          </>
        )}

        <Divider />
      </Box>
      {pathName.includes("edit") && (
        <>
          <Box
            className="mb-10 c-pointer"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <input type="file" />
            <DeleteIcon
              fontSize="20"
              sx={{ fill: "red" }}
              onClick={() => {
                isOpen(true);
              }}
            />
          </Box>
        </>
      )}
      <Box className="mb-20">
        {pathName.includes("edit") ? (
          <>
            <Box className="mb-5" color="#5b5757" fontSize={18}>
              Blood group
            </Box>
            <Select
              value={selected}
              onChange={(option) => {
                setSelected(option);
              }}
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
              className="w-100"
            />
          </>
        ) : (
          <>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box className="fw-bold">Blood group</Box>
              AB+{" "}
              <Box
                className="c-pointer"
                onClick={() => {
                  navigate("/edit");
                }}
              >
                Select
              </Box>
            </Box>
          </>
        )}
      </Box>
      {!pathName.includes("edit") && (
        <>
          <Box className="mb-20">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              className="card p-10 br-5 c-pointer"
            >
              <Box display={"flex"} alignItems={"center"}>
                <FileCopyIcon fontSize="20" />
                <Box sx={{ fontWeight: 500 }} className="ml-5">
                  Resume
                </Box>
              </Box>
              <ArrowForwardIosIcon
                fontSize="20"
                onClick={() => {
                  navigate("/edit");
                }}
              />
            </Box>
          </Box>
          <Divider />
        </>
      )}
      {pathName.includes("edit") && (
        <Box position={"absolute"} bottom={"10px"} left={"50%"} right={"50%"}>
          <Button variant="contained" color="error">
            Save
          </Button>
        </Box>
      )}
      <>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="mt-10"
        >
          <Box className="fw-bold">Soft skills </Box>
          <EditIcon
            fontSize="20"
            className="c-pointer"
            onClick={() => {
              navigate("/skill");
            }}
          />
        </Box>
        {/* <Box className="p-10 mb-10" textAlign={"center"}>
          <Box color={"#ccc"}>  No soft skills added yet </Box>
        </Box> */}
        <Box className="mt-10 mb-10">
          <Box className="mb-10">
            I am incredible at these skills/professionally great at
          </Box>
          <Box className="mb-10">
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              <Chip label="photoshop" color="primary" />
              <Chip label="sketch" color="primary" />
              <Chip label="Figma" color="primary" />
              <Chip label="c+" color="primary" />
              <Chip label="React" color="primary" />
              <Chip label="flutter" color="primary" />
              <Chip label="vue" color="primary" />
              <Chip label="Figma" color="primary" />
              <Chip label="c+" color="primary" />
              <Chip label="React" color="primary" />
              <Chip label="flutter" color="primary" />
              <Chip label="vue" color="primary" />
            </Stack>
          </Box>
          <Divider />
          <Box className="mb-10 mt-5">Hobbies i am passionate about</Box>
          <Box className="mb-10">
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              <Chip label="photoshop" color="primary" />
              <Chip label="sketch" color="primary" />
              <Chip label="Figma" color="primary" />
            </Stack>
          </Box>
          <Divider />
          <Box className="mb-10 mt-5">My favourite subject are</Box>
          <Box className="mb-10">
            <Stack direction="row" flexWrap={"wrap"} spacing={1}>
              <Chip label="photoshop" color="primary" />
              <Chip label="sketch" color="primary" />
              <Chip label="Figma" color="primary" />
            </Stack>
          </Box>
        </Box>
        <Divider />
      </>
      {pathName.includes("edit") && open && (
        <Modal
          open={open}
          onClose={() => isOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <DeleteIcon sx={{ fill: "red", fontSize: "5rem" }} />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to delete resume?
            </Typography>
            <Box className="mt-20">
              <Button
                variant="outlined"
                sx={{ marginRight: "5px" }}
                onClick={() => isOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

export default Home;
