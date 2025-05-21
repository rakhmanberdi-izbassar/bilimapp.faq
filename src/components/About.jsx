import React from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'

const features = [
  {
    title: 'Онлайн платформа',
    image: '/images/feature1.jpg',
    description:
      'Мектеп пен одан тыс уақытта білім алуға арналған цифрлық орта.',
  },
  {
    title: 'Жоғары технологиялар',
    image: '/images/feature2.jpg',
    description: 'Тиімді оқытуға арналған ақылды алгоритмдермен жабдықталған.',
  },
  {
    title: 'Қолайлы интерфейс',
    image: '/images/feature1.jpg',
    description:
      'Барлық құрылғыларда ыңғайлы жұмыс істейтін түсінікті интерфейс.',
  },

  {
    title: 'Онлайн платформа',
    image: '/images/feature1.jpg',
    description:
      'Мектеп пен одан тыс уақытта білім алуға арналған цифрлық орта.',
  },
  {
    title: 'Жоғары технологиялар',
    image: '/images/feature2.jpg',
    description: 'Тиімді оқытуға арналған ақылды алгоритмдермен жабдықталған.',
  },
  {
    title: 'Қолайлы интерфейс',
    image: '/images/feature1.jpg',
    description:
      'Барлық құрылғыларда ыңғайлы жұмыс істейтін түсінікті интерфейс.',
  },
]

export default function FeaturesGrid() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 8, maxWidth: 1200, mx: 'auto' }}>
      <Typography color="#4C7EFF" variant="h5" fontWeight={700} sx={{ mb: 4 }}>
        Біздің мүмкіндіктеріміз туралы
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                backgroundColor: '#f9f9f9',
                overflow: 'hidden',
                height: '100%',
                transition: '0.3s',
                '&:hover': { boxShadow: 4 },
              }}
            >
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: '100%',
                  height: 160,
                  objectFit: 'cover',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" fontWeight={700} mb={1}>
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#5f6c7b', fontSize: '14px' }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
