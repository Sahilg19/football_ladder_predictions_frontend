// src/components/Leaderboard.js
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LeaderCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: 120,
  textAlign: "center",
  borderRadius: "12px",
  backgroundColor: theme.palette.grey[100],
  boxShadow: theme.shadows[2],
}));

export default function Leaderboard({ scores }) {
  // Convert object {user: score} → array and sort by score (asc)
  const sorted = Object.entries(scores).sort((a, b) => a[1] - b[1]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
        mb: 4,
      }}
    >
      {sorted.map(([user, score]) => (
        <LeaderCard key={user}>
          <Typography variant="h6">{user}</Typography>
          <Typography variant="body1">Score: {score}</Typography>
        </LeaderCard>
      ))}
    </Box>
  );
}
