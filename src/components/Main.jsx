import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Stack,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import img from '../assets/M_height.png'
import Logo from '../assets/2.png'

export default function BilimappLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <div style={{ backgroundColor: '#f0f4ff' }}>
      <Box
        sx={{
          position: 'relative',
          width: '1200px',
          height: '100vh',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #4C7EFF 0%, #5AC9FA 100%)',
          overflow: 'auto', // кейбір жағдайда scroll керек болады
          px: 2,
        }}
      >
        {/* Left Text Side */}
        <Box sx={{ zIndex: 2, maxWidth: 520, color: '#fff', mb: 25 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Box
              component="img"
              src={Logo}
              alt="Bilimapp logo"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" fontWeight={600}>
              Bilimapp
            </Typography>
          </Stack>
          <Typography
            textAlign="left"
            variant="h4"
            fontWeight={700}
            gutterBottom
          >
            Сандық білім беру ортасы
          </Typography>
          <Typography textAlign="left" variant="body1" sx={{ opacity: 0.9 }}>
            Басқаруға, талдауға және тиімді пайдалануға арналған бірыңғай шешім
            оқу процесін ұйымдастыру
          </Typography>
        </Box>

        {/* Spiral Image */}
        <Box
          component="img"
          src={img}
          alt="spiral"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: { xs: 400, md: 650 },
            opacity: 1,
            zIndex: 1,
          }}
        />

        {/* Right Login Box */}
        <Box
          sx={{
            zIndex: 3,
            maxWidth: 400,
            width: '100%',
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255,255,255,0.08)',
            borderRadius: 6,
            p: 4,
            boxShadow: 5,
            color: '#fff',
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Typography textAlign="left" variant="h5" fontWeight={600} mb={2}>
              Bilim.app қолданбасына кіріңіз
            </Typography>
            <Typography textAlign="left" variant="body2" mb={0.5}>
              Сіздің логиніңіз
            </Typography>
            <TextField
              fullWidth
              placeholder="осы жерден кіріңіз"
              variant="outlined"
              outline="none"
              margin="dense"
              InputProps={{
                sx: {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  borderRadius: 3,
                  input: { color: 'white' },
                },
              }}
            />
            <Typography textAlign="left" variant="body2" mt={2} mb={0.5}>
              Құпия сөзіңіз
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              placeholder="мұнда құпия сөз"
              variant="outlined"
              margin="dense"
              InputProps={{
                sx: {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  borderRadius: 3,
                  input: { color: 'white' },
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: 'white' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: '#a5c8f7',
                mt: 1,
                display: 'block',
                textAlign: 'right',
                cursor: 'pointer',
              }}
            >
              Құпия сөзіңізді ұмытып қалдыңыз ба?
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: '#045fbc',
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': { backgroundColor: '#0345a0' },
              }}
            >
              Жүйеге кіру
            </Button>
            <Box
              sx={{ mt: 2, borderBottom: '1px solid rgba(255,255,255,0.2)' }}
            ></Box>
            <Typography
              align="center"
              sx={{ my: 1, fontSize: '13px', color: 'white' }}
            >
              немесе
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#d9e8fb',
                color: '#045fbc',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': { backgroundColor: '#c8dcf4' },
              }}
            >
              Платформаға қол жеткізу
            </Button>
          </CardContent>
        </Box>
      </Box>
    </div>
  )
}
