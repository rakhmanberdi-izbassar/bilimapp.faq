import React from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SchoolIcon from '@mui/icons-material/School'

const stats = [
  {
    icon: <PeopleAltIcon sx={{ color: 'white', fontSize: 28 }} />,
    number: '100 602',
    label: 'Біздің студенттер',
  },
  {
    icon: <PersonIcon sx={{ color: 'white', fontSize: 28 }} />,
    number: '132',
    label: 'Біздің мұғалімдер',
  },
  {
    icon: <RocketLaunchIcon sx={{ color: 'white', fontSize: 28 }} />,
    number: '12',
    label: 'Бағдарламалар саны',
  },
  {
    icon: <SchoolIcon sx={{ color: 'white', fontSize: 28 }} />,
    number: '60 044',
    label: 'Түлектер',
  },
]

export default function StatsSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #4C7EFF 0%, #5AC9FA 100%)',
        color: 'white',
        py: 10,
        px: { xs: 2, md: 8 },
        textAlign: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={1}>
        Біздің статистика
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.9, mb: 6 }}>
        Біздің академиялық сапаны, студенттердің әртүрлілігін көрсететін негізгі
        сандар және факультетінің сараптамасы.
      </Typography>

      <Grid container spacing={15} justifyContent="center">
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Stack alignItems="center" spacing={1}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: 2,
                  width: 50,
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                }}
              >
                {stat.icon}
              </Box>
              <Typography variant="h6" fontWeight={700}>
                {stat.number}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {stat.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
