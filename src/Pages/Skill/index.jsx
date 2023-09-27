import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchData } from "../../actions/getSkills";
import { fetchHobbies } from "../../actions/getHobbies";
import { fetchSubjectData } from "../../actions/getSubject";

const Home = () => {
  const route = useLocation();
  const navigate = useNavigate();
  const pathName = route.pathname;
  const dispatch = useDispatch();
  const a = useSelector((state) => state);
  const { data } = useSelector((state) => state.skill);
  const { hobbies_data } = useSelector((state) => state.hobbies);
  const { subject_data } = useSelector((state) => state.subject);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchHobbies());
    dispatch(fetchSubjectData());
  }, []);

  const displaySkill = useMemo(() => {
    return selectedSkill.length !== 0
      ? data?.filter((obj) => !selectedSkill.includes(obj))
      : data;
  }, [selectedSkill, data]);

  const displayHobbies = useMemo(() => {
    return selectedHobbies.length !== 0
      ? hobbies_data?.filter((obj) => !selectedHobbies.includes(obj))
      : hobbies_data;
  }, [selectedHobbies, hobbies_data]);

  const displaySubject = useMemo(() => {
    return selectedSubject.length !== 0
      ? subject_data?.filter((obj) => !selectedSubject.includes(obj))
      : subject_data;
  }, [selectedSubject, subject_data]);

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} alignItems={"center"} className="mt-10 mb-20">
        {pathName.includes("skill") && (
          <ArrowBackIosIcon
            fontSize="20"
            onClick={() => {
              navigate("/");
            }}
            className="c-pointer"
          />
        )}
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Skills
        </Typography>
      </Box>
      <Box>
        <>
          <Box className="mt-10 mb-10">
            <Box className="mb-10">
              I am incredible at these skills/professionally great at
            </Box>
            <Box className="mb-10 br-10 border p-10">
              <Stack
                direction="row"
                spacing={1}
                sx={{ height: "34px", overflowX: "auto" }}
              >
                {selectedSkill && selectedSkill.length !== 0
                  ? selectedSkill.map((obj, key) => {
                      return (
                        <Chip
                          label={obj.value}
                          color="primary"
                          onDelete={() =>
                            setSelectedSkill(
                              selectedSkill.filter((obj1) => obj1 !== obj)
                            )
                          }
                          key={key}
                        />
                      );
                    })
                  : "Please selct at least one"}
              </Stack>
            </Box>
            <Box
              sx={{ height: "150px", overflowY: "auto" }}
              className="border p-10"
            >
              <Stack direction="row" flexWrap={"wrap"} spacing={1}>
                {displaySkill &&
                  displaySkill !== null &&
                  displaySkill.map((obj, key) => {
                    return (
                      <Chip
                        label={obj.value}
                        color="primary"
                        key={key}
                        onClick={() => {
                          setSelectedSkill([...selectedSkill, obj]);
                        }}
                        sx={{ marginBottom: "1px !important" }}
                      />
                    );
                  })}
              </Stack>
            </Box>

            <Box className="mb-10 mt-5">Hobbies i am passionate about</Box>
            <Box className="mb-10  br-10 border p-10">
              <Stack
                direction="row"
                spacing={1}
                sx={{ height: "34px", overflowX: "auto" }}
              >
                {selectedHobbies && selectedHobbies.length !== 0
                  ? selectedHobbies.map((obj, key) => {
                      return (
                        <Chip
                          label={obj.value}
                          color="primary"
                          onDelete={() =>
                            setSelectedHobbies(
                              selectedHobbies.filter((obj1) => obj1 !== obj)
                            )
                          }
                          key={key}
                        />
                      );
                    })
                  : "Please selct at least one"}
              </Stack>
            </Box>
            <Box
              sx={{ height: "150px", overflowY: "auto" }}
              className="border p-10"
            >
              <Stack direction="row" flexWrap={"wrap"} spacing={1}>
                {displayHobbies &&
                  displayHobbies !== null &&
                  displayHobbies.map((obj, key) => {
                    return (
                      <Chip
                        label={obj.value}
                        color="primary"
                        key={key}
                        onClick={() => {
                          setSelectedHobbies([...selectedHobbies, obj]);
                        }}
                        sx={{ marginBottom: "1px !important" }}
                      />
                    );
                  })}
              </Stack>
            </Box>

            <Box className="mb-10 mt-5">My favourite subject are</Box>
            <Box className="mb-10  br-10 border p-10">
              <Stack
                direction="row"
                spacing={1}
                sx={{ height: "34px", overflowX: "auto" }}
              >
                {selectedSubject && selectedSubject.length !== 0
                  ? selectedSubject.map((obj, key) => {
                      return (
                        <Chip
                          label={obj.value}
                          color="primary"
                          onDelete={() =>
                            setSelectedSubject(
                              selectedSubject.filter((obj1) => obj1 !== obj)
                            )
                          }
                          key={key}
                        />
                      );
                    })
                  : "Please selct at least one"}
              </Stack>
            </Box>
            <Box
              sx={{ height: "150px", overflowY: "auto" }}
              className="border p-10"
            >
              <Stack direction="row" flexWrap={"wrap"} spacing={1}>
                {displaySubject &&
                  displaySubject !== null &&
                  displaySubject.map((obj, key) => {
                    return (
                      <Chip
                        label={obj.value}
                        color="primary"
                        key={key}
                        onClick={() => {
                          setSelectedSubject([...selectedSubject, obj]);
                        }}
                        sx={{ marginBottom: "1px !important" }}
                      />
                    );
                  })}
              </Stack>
            </Box>
          </Box>
        </>
      </Box>
      {pathName.includes("skill") && (
        <Box
        // position={"absolute"} bottom={"10px"} left={"50%"} right={"50%"}
        >
          <Button variant="contained" color="error">
            Save
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Home;
