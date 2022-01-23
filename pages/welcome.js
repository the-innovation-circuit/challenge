import {
  Button,
  Box,
  Card,
  Container,
  Heading,
  Input,
  Link,
  Textarea
} from 'theme-ui'
import Meta from '@the-innovation-circuit/meta'

function SquareButton({
  children,
  bg = 'white',
  color = 'primary',
  as,
  mx = 2,
  sx,
  borderRadius = '8px'
}) {
  return (
    <Button sx={{ borderRadius: '12px', mx, bg, color, ...sx }}>
      <Heading as={as ? as : 'h2'} sx={{ textDecoration: 'none!important' }}>
        {children}
      </Heading>
    </Button>
  )
}

const description = `Calling all students aged 12 to 19 in APAC! The Innovation Challenge is your chance to tackle the critical issues that your community faces. As an individual or as a team (5 people at most) you'll identify a issue, create an idea to solve that issue and then pitch your idea. The best pitch will win a SGD 1,000 cash prize to help kickstart the team's idea.`

export default function Home() {
  return (
    <Box>
      <Meta title="The Innovation Challenge" description={description} />
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(rgba(51, 37, 87,0.7), rgba(51, 37, 87,0.95)), url(https://cloud-paewrz6mt-hack-club-bot.vercel.app/0ic-backing.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box>

            <Heading sx={{ fontSize: 6 }}>Welcome to the Innovation Challenge</Heading>
            <Heading sx={{ fontSize: 3, fontWeight: 600, mt: 2 }}>
              We've sent all the details to your email.
            </Heading>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
