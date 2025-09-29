// src/components/Leaderboard.js
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LeaderCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: 100,
  textAlign: "center",
  borderRadius: "12px",
  boxShadow: theme.shadows[3],
}));

export default function Leaderboard({ scores }) {
  const sorted = Object.entries(scores).sort((a, b) => a[1] - b[1]);

  const medalStyles = [
    { color: "#FFD700", icon: "🥇" }, // Gold
    { color: "#C0C0C0", icon: "🥈" }, // Silver
    { color: "#CD7F32", icon: "🥉" }, // Bronze
  ];

  const podium = sorted.slice(0, 3);
  const others = sorted.slice(3);

  return (
    <Box sx={{ mb: 4 }}>
      {/* Podium Layout */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "flex-end" },
          gap: 2,
          mb: 3,
          flexDirection: { xs: "column", sm: "row" }, // stack on mobile
        }}
      >
        {/* 1st place */}
        {podium[0] && (
          <LeaderCard
            sx={{
              order: { xs: 1, sm: 2 }, // first on mobile, middle on desktop
              backgroundColor: medalStyles[0].color,
              fontWeight: "bold",
              transform: { xs: "none", sm: "translateY(0)" },
              width: { xs: "80%", sm: "auto" },
            }}
          >
            <Typography variant="h6">
              {medalStyles[0].icon} {podium[0][0]}
            </Typography>
            <Typography variant="body1">Score: {podium[0][1]}</Typography>
          </LeaderCard>
        )}

        {/* 2nd place */}
        {podium[1] && (
          <LeaderCard
            sx={{
              order: { xs: 2, sm: 1 }, // second on mobile, left on desktop
              backgroundColor: medalStyles[1].color,
              transform: { xs: "none", sm: "translateY(20px)" },
              width: { xs: "80%", sm: "auto" },
            }}
          >
            <Typography variant="h6">
              {medalStyles[1].icon} {podium[1][0]}
            </Typography>
            <Typography variant="body1">Score: {podium[1][1]}</Typography>
          </LeaderCard>
        )}

        {/* 3rd place */}
        {podium[2] && (
          <LeaderCard
            sx={{
              order: { xs: 3, sm: 3 }, // third on both
              backgroundColor: medalStyles[2].color,
              transform: { xs: "none", sm: "translateY(20px)" },
              width: { xs: "80%", sm: "auto" },
            }}
          >
            <Typography variant="h6">
              {medalStyles[2].icon} {podium[2][0]}
            </Typography>
            <Typography variant="body1">Score: {podium[2][1]}</Typography>
          </LeaderCard>
        )}
      </Box>

      {/* Other users below */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {others.map(([user, score]) => (
          <LeaderCard key={user} sx={{ backgroundColor: "grey.100" }}>
            <Typography variant="h6">{user}</Typography>
            <Typography variant="body1">Score: {score}</Typography>
          </LeaderCard>
        ))}
      </Box>
    </Box>
  );
}
