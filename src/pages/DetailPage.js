import React from "react";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Person3Icon from "@mui/icons-material/Person3";
import PublicIcon from "@mui/icons-material/Public";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  console.log(jobId);

  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        No job found
      </Typography>
    );
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" marginTop={3}>
        {job.title}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
          <Person3Icon /> {job.city}
        </Box>
        <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
          <PublicIcon /> {job.description}
        </Box>
      </Box>
    </Container>
  );
}

export default DetailPage;
