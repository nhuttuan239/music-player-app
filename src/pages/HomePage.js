import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";
import Pagination from "../components/Pagination";
import { useState } from "react";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);

  return (
    <Container>
      <Grid container spacing={2} mt={1}>
        {currentPosts.map((job) => (
          <Grid key={job.id} item xs={6} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        totalPosts={jobs.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
}

export default HomePage;
