import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  OutlinedInput,
  TextField,
  Select,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [alert, setAlert] = React.useState(false);
  const [selectedObj, setSelectedObj] = React.useState();
  const [array, setArray] = React.useState([
    {
      branchName: "",
      segmant: [
        {
          address: "",
          state: "",
          city: "",
        },
      ],
    },
  ]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const addSegment = (branchIndex) => {
    const data =
      array[branchIndex].segmant[array[branchIndex].segmant.length - 1];
    // const isOpen = data.address !== "" && data.state !== "" && data.city !== "";
    // if (isOpen) {
    setArray((prevData) => {
      const newData = [...prevData];
      const newSegment = {
        address: "",
        state: "",
        city: "",
      };
      newData[branchIndex].segmant.push(newSegment);
      return newData;
    });
    // }
  };
  const deleteBranch = () => {
    const newArr = array.filter((_, index) => index !== selectedObj);
    setArray(newArr);
    setAlert(false);
  };
  const onBranchName = (e, key) => {
    array[key].branchName = e.target.value;
    setArray(array);
  };
  const list = (anchor) => (
    <Box sx={{ width: 550 }} role="presentation">
      <Box onClick={toggleDrawer(anchor, false)} marginBottom={5}>
        close
      </Box>
      <Dialog
        open={alert}
        onClose={() => setAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>

        <DialogActions>
          <Button onClick={() => setAlert(false)}>Cancle</Button>
          <Button onClick={() => deleteBranch()} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      {array &&
        array.map((obj, key) => {
          return (
            <Accordion key={key}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <TextField
                  fullWidth
                  hiddenLabel
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  // value={obj.branchName}
                  onChange={(e) => {
                    onBranchName(e, key);
                  }}
                />
                <Button
                  onClick={() => {
                    setAlert(true);
                    setSelectedObj(key);
                  }}
                >
                  Delete
                </Button>
              </AccordionSummary>
              <AccordionDetails>
                {obj.segmant &&
                  obj.segmant.map((obj1, key1) => {
                    return (
                      <Box
                        key={key1}
                        marginBottom={2}
                        alignItems={"center"}
                        display={"flex"}
                      >
                        <Select
                          displayEmpty
                          value={obj1?.address || ""}
                          onChange={(e) => {
                            array[key].segmant[key].address = e.target.value;
                            setArray(array);
                          }}
                          input={<OutlinedInput />}
                          inputProps={{ "aria-label": "Without label" }}
                          size="small"
                          sx={{ width: "160px", marginRight: "5px" }}
                        >
                          <MenuItem disabled value="">
                            <em>Select address</em>
                          </MenuItem>

                          <MenuItem value={"Address1"}>Address1</MenuItem>
                          <MenuItem value={"Address2"}>Address2</MenuItem>
                          <MenuItem value={"Address3"}>Address3</MenuItem>
                        </Select>
                        <Select
                          displayEmpty
                          value={obj1.state || ""}
                          onChange={(e) => {
                            array[key].segmant[key].state = e.target.value;
                            setArray(array);
                          }}
                          input={<OutlinedInput />}
                          inputProps={{ "aria-label": "Without label" }}
                          size="small"
                          sx={{ width: "140px", marginRight: "5px" }}
                        >
                          <MenuItem disabled value="">
                            <em>Select state</em>
                          </MenuItem>

                          <MenuItem value={"state1"}>state1</MenuItem>
                          <MenuItem value={"state2"}>state2</MenuItem>
                          <MenuItem value={"state3"}>state3</MenuItem>
                        </Select>
                        <TextField
                          id="filled-hidden-label-small"
                          variant="filled"
                          size="small"
                          // value={obj1.city || ""}
                          onChange={(e) => {
                            array[key].segmant[key].city = e.target.value;
                            setArray(array);
                          }}
                          sx={{ width: "150px" }}
                        />
                      </Box>
                    );
                  })}
                <Button onClick={() => addSegment(key)}>Add Segment</Button>
              </AccordionDetails>
            </Accordion>
          );
        })}
      <Button
        onClick={() => {
          setArray([
            ...array,
            {
              branchName: "",
              segmant: [
                {
                  address: "",
                  state: "",
                  city: "",
                },
              ],
            },
          ]);
        }}
      >
        Add Branch
      </Button>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
