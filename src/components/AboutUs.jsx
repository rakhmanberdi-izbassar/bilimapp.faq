import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import img from '../assets/7753424.jpg'

export default function AboutBilimApp() {
  return (
    <Box sx={{ py: 12, px: { xs: 2, md: 10 }, backgroundColor: '#ffffff' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} size={6}>
          <Box
            sx={{
              backgroundColor: '#d6c4ff',
              borderRadius: 4,
              width: '100%',
              maxWidth: 500,
              mx: 'auto',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={img}
              alt="Bilim App Visual"
              sx={{ width: '100%', display: 'block' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 70,
                height: 70,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 0,
                  height: 0,
                  borderLeft: '16px solid #4C7EFF',
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  ml: '4px',
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid size={6} item xs={12} md={6}>
          <Typography variant="h5" fontWeight={700} mb={3}>
            Bilim.app қолданбасы туралы толығырақ
          </Typography>
          <Typography
            textAlign={'left'}
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.8, mb: 2 }}
          >
            Басқаруға, талдауға және тиімді пайдалануға арналған бірыңғай шешім
            оқу процесін ұйымдастыру. Басқарудың бірыңғай шешімі, талдау, оқу
            процесін тиімді ұйымдастыру. А басқаруға, талдауға және тиімді
            ұйымдастыруға арналған бірыңғай шешім оқу процесі. Басқару, талдау
            үшін бірыңғай шешім, және оқу-тәрбие процесін тиімді ұйымдастыру.
          </Typography>
          <Typography
            textAlign={'left'}
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.8 }}
          >
            Басқаруға, талдауға және тиімді пайдалануға арналған бірыңғай шешім
            оқу процесін ұйымдастыру. Басқарудың бірыңғай шешімі, талдау, оқу
            процесін тиімді ұйымдастыру. А басқаруға, талдауға және тиімді
            ұйымдастыруға арналған бірыңғай шешім оқу процесі.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
