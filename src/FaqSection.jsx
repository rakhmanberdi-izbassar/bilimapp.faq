import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Link,
  Divider,
  Stack,
  Paper,
  Grid,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'Платформаның мақсаты қандай?',
    answer:
      'Платформаның мақсаты – білім беру үдерісін жеңілдетіп, оқушылар мен мұғалімдерге тиімді құралдар ұсыну.',
  },
  {
    question: 'Платформа кімдерге көмектеседі?',
    answer:
      'Bilim.app платформасы оқушыларға, мұғалімдерге және ата-аналарға арналған.',
  },
  {
    question: 'Қандай пәндер қамтылған?',
    answer:
      'Платформада математика, физика, химия, биология, география және басқа пәндер бар.',
  },
  {
    question: 'Егер сайтқа кіре алмасам не істеуім керек?',
    answer:
      'Ең алдымен интернет қосылымын тексеріңіз немесе бізбен хабарласыңыз.',
  },
  {
    question: 'Аккаунтымды қалай қалпына келтіруге болады?',
    answer: 'Құпиясөзді ұмытсаңыз, "Құпиясөзді ұмыттым" батырмасын басыңыз.',
  },
  {
    question: 'Платформада қосымша материалдар бар ма?',
    answer: 'Иә, қосымша оқу құралдары мен тесттер бар.',
  },
  {
    question: 'Қолдау қызметіне қалай хабарласуға болады?',
    answer: 'Төмендегі байланыс ақпараты арқылы хабарласа аласыз.',
  },
  {
    question: 'Bilim.app платформасы қандай артықшылықтар береді?',
    answer: 'Тиімділік, ыңғайлы интерфейс және тегін ресурстар.',
  },
  {
    question: 'Платформадағы барлық курстар тегін бе?',
    answer: 'Иә, барлық негізгі материалдар тегін ұсынылады.',
  },
  {
    question: 'Bilim.app арқылы тест тапсыруға бола ма?',
    answer: 'Иә, платформада тест тапсыру мүмкіндігі бар.',
  },
  {
    question: 'Мұғалімдерге арналған құралдар бар ма?',
    answer: 'Иә, мұғалімдер үшін арнайы модульдер қарастырылған.',
  },
  {
    question: 'Платформада видео сабақтар бар ма?',
    answer: 'Иә, кейбір пәндер бойынша видео сабақтар бар.',
  },
  {
    question: 'Мұғалімдер өз материалдарын жүктей ала ма?',
    answer: 'Иә, мұғалімдер өз материалдарын жүктеп, оқушылармен бөлісе алады.',
  },
  {
    question: 'Мұғалімдер оқушылардың үлгерімін бақылай ала ма?',
    answer: 'Иә, платформада оқушылардың нәтижелерін бақылау жүйесі бар.',
  },
  {
    question:
      'Егер мен қателік тапсам немесе ұсынысым болса, қайда хабарласуым керек?',
    answer:
      'toolbilimapp@gmail.com поштасына немесе көрсетілген телефонға хабарласыңыз.',
  },
]

export default function FaqSection() {
  const [expandedPanel, setExpandedPanel] = useState(null)
  return (
    <Box sx={{ backgroundColor: '#f0f6ff', py: 6 }}>
      <Container>
        <Paper
          sx={{
            p: 4,
            borderRadius: '30px',
            backgroundColor: '#ffffff',
            width: '1200px',
            boxShadow: 'none',
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'left' }}>
            <Grid container spacing={2}>
              <Grid size={8} item xs={12} md={8}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Жиі қойылатын сұрақтар (FAQ)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Мұнда сіз ең жиі қойылатын сұрақтарға жауаптарды таба
                    аласыз. Олармен танысып, мәселеңізді жылдам шешіңіз. Егер
                    қажетті ақпаратты таба алмасаңыз, уайымдамаңыз! Сіз әрдайым
                    бізге төмендегі байланыс мәліметтері арқылы хабарласып,
                    толық нұсқаулықпен таныса аласыз.
                  </Typography>
                </Box>
                <Stack spacing={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">
                      Байланыс мәліметтері:
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon color="primary" />
                    <Typography variant="body2">+7 (707) 946 33 57</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon color="primary" />
                    <Link
                      href="mailto:toolbilimapp@gmail.com"
                      underline="hover"
                    >
                      toolbilimapp@gmail.com
                    </Link>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">
                      Нұсқаулық: <Link href="#">Танысу</Link>
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} sx={{ textAlign: 'left', mt: 2 }}>
                    <Typography variant="body2">
                      Егер қосымша сұрақтарыңыз болса, біздің команда әрқашан
                      көмек көрсетуге дайын! Құрықта қалмаңыз, біз сіздің
                      сұрауыңызға мүмкіндігінше жылдам жауап беруге тырысамыз.
                    </Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={4}>
                <img
                  src="https://bilim-app.kz/_nuxt/img/rafiki2.3397679.svg"
                  alt="Bilim"
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {faqData.map((faq, idx) => (
            <Accordion
              key={idx}
              expanded={expandedPanel === idx}
              onChange={() =>
                setExpandedPanel(expandedPanel === idx ? null : idx)
              }
              sx={{
                backgroundColor: '#e8f2ff',
                borderRadius: '25px',
                mb: 2,
                boxShadow: 'none',
                '&:before': { display: 'none' },
                px: 2,
              }}
            >
              <AccordionSummary
                sx={{
                  minHeight: 60,
                  pl: 0,
                  pr: 2,
                  py: 1.5,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                      transition: 'all 0.2s ease-in-out',
                      ...(expandedPanel === idx
                        ? {
                            backgroundColor: '#1565c0', // ашылған кезде — толық көк
                            color: '#fff',
                          }
                        : {
                            backgroundColor: '#fff', // жабық кезде — ақ іші
                            border: '2px solid #1565c0',
                            color: '#1565c0',
                          }),
                    }}
                  >
                    {expandedPanel === idx ? (
                      <RemoveIcon fontSize="small" />
                    ) : (
                      <AddIcon fontSize="small" />
                    )}
                  </Box>

                  <Typography variant="body1" fontWeight="500">
                    {faq.question}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 1, textAlign: 'left' }}>
                <Typography variant="body2">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
    </Box>
  )
}
