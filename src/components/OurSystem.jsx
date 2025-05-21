import React from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'
import img from '../assets/7753424.jpg'

export default function OurSystem() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 10 },
        background: 'linear-gradient(90deg, #4C7EFF 0%, #5AC9FA 100%)',
        color: 'white',
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={1}>
        Our SystemБіздің жүйе
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.9, mb: 6 }}>
        Біздің академиялық сапаны, студенттердің әртүрлілігін көрсететін негізгі
        сандар және факультетінің сараптамасы.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left: Image */}
        <Grid size={6} item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#af8bfc',
              borderRadius: 4,
              overflow: 'hidden',
              width: '100%',
              maxWidth: 500,
              mx: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <Box
              component="img"
              src={img}
              alt="Bilim App Visual"
              sx={{ width: '100%', display: 'block' }}
            />
          </Box>
        </Grid>

        {/* Right: Text on white background */}
        <Grid size={6} item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 6,
              backgroundColor: 'white',
              color: '#222',
              p: 4,
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2}>
              Біздің жүйе
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Басқаруға, талдауға және тиімді пайдалануға арналған бірыңғай
              шешім оқу процесін ұйымдастыру, Бірыңғай шешім оқытуды басқару,
              талдау және тиімді ұйымдастыру процесс.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Басқаруға, талдауға және тиімді пайдалануға арналған бірыңғай
              шешім оқу-тәрбие процесін ұйымдастыру, тиімді ұйымдастыру оқу
              процесі.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              оқу процесін тиімді ұйымдастыру оқу-тәрбие процесін тиімді
              ұйымдастыру оқу процесін тиімді ұйымдастыру оқу процесін тиімді
              ұйымдастыру оқу-тәрбие процесін тиімді ұйымдастыру оқу процесін
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
