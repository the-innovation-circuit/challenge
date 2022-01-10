import {
  Button,
  Box,
  Card,
  Container,
  Heading,
  Input,
  Link,
  Textarea,
  Image,
  Flex,
  Text
} from 'theme-ui'
import Meta from '@the-innovation-circuit/meta'
import Script from 'next/script'

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

const description = `Calling all students aged 12 to 18 in APAC! The Innovation Challenge is your chance to tackle the critical issues that your community faces. As an individual or as a team (5 people at most) you'll identify a issue, create an idea to solve that issue and then pitch your idea. The best pitch will win a SGD 1,000 cash prize to help kickstart the team's idea.`

export default function Home() {
  return (
    <Box>
      <Meta title="The Innovation Challenge" description={description} image="https://cloud-ck3svo7u2-hack-club-bot.vercel.app/0untitled_design-24.png" />
      <Script data-website-id="a1f88f64-44d5-4e26-8472-248fc8a8c7c9" src="https://analytics.sampoder.com/umami.js" />
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
            display: 'grid',
            flexDirection: 'column',
            gap: '8px',
            py: 6
          }}
        >
          <Heading sx={{ fontSize: [3, 4], fontWeight: 600 }}>
            Pitch your innovative idea & potentially win $1,000 at the
          </Heading>
          <Heading sx={{ fontSize: [6, 7] }}>Innovation Challenge</Heading>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href="#submit"
              sx={{
                textDecoration: 'none!important',
                fontSize: ['0.8em', '1em']
              }}
            >
              <SquareButton>
                Join the Challenge
              </SquareButton>
            </Link>
          </Box>
        </Container>
      </Box>
      <Container variant="copy" sx={{ fontSize: 2, py: 4 }}>
        {description}
      </Container>
      <Box sx={{ bg: 'primary', py: 4 }}>
        <Container variant="copy" sx={{ display: 'grid', gap: '16px' }}>
          <Heading as="h1" sx={{ color: 'white' }}>
            The Process
          </Heading>
          <Card sx={{ p: [3, 3, 3] }}>
            <Heading as="h4" sx={{ mb: 1 }}>
              Stage 1: Project Formulation
            </Heading>
            The first stage of this process is to come up with a problem and a
            solution (here's a great guide for this). From there you'll need to
            form a pitch that includes the issue you're solving, your idea, the
            impact of your idea and your idea's feasibility.
          </Card>
          <Card sx={{ p: [3, 3, 3] }}>
            <Heading as="h4" sx={{ mb: 1 }}>
              Stage 2: The Qualifying Round (up until 21 March)
            </Heading>
            In this stage, all teams who wish to participate will submit a video
            (max. 5 minutes) with their pitch as a video in the form below by
            March 21st.
          </Card>
          <Card sx={{ p: [3, 3, 3] }}>
            <Heading as="h4" sx={{ mb: 1 }}>
              Stage 3: The Finals (late April)
            </Heading>
            The top five teams from the Qualifying Round will be invited to take
            place in the finals. In the finals they'll deliver a 5-10 minute
            pitch live in front of a panel of judges and then answer questions
            for another 5 minutes. The winning team will subsequently be
            selected. The finals will take place on a weekend in late April,
            exact dates TBC.
          </Card>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Card
              sx={{
                p: [3, 3, 3],
                py: [2, 2, 2],
                mr: 2,
                mb: 2,
                width: 'fit-content',
                fontWeight: 700
              }}
              variant="interactive"
              as="a"
              href="https://docs.google.com/document/d/1XHwdeZ_WaeGHft7E1FETgkWHjWU2FEYA9IuivaiaP_w/edit?usp=sharing"
              target="_blank"
            >
              Learn More →
            </Card>
            <Card
              sx={{
                p: [3, 3, 3],
                py: [2, 2, 2],
                width: 'fit-content',
                mb: 2,
                fontWeight: 700
              }}
              variant="interactive"
              as="a"
              href="https://discord.com/invite/6B7PF6EuV3"
              target="_blank"
            >
              Join Our Discord →
            </Card>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: 4 }}>
        <Container variant="copy" sx={{ display: 'grid', gap: '16px' }}>
          <Heading as="h1">The Prizes</Heading>
          <Card
            sx={{
              p: [3, 3, 3],
              bg: 'sheet',
              boxShadow: 'none',
              border: '0.1px solid',
              borderColor: 'sunken'
            }}
          >
            <Heading as="h4" sx={{ mb: 1 }}>
              The Grand Prize: $1,000
            </Heading>
            The Grand Prize is judged on innovation, impact, presentation and
            feasibility. This prize, alongside the others below, will be
            presented after the finals.
          </Card>
          <Card
            sx={{
              p: [3, 3, 3],
              bg: 'sheet',
              boxShadow: 'none',
              border: '0.1px solid',
              borderColor: 'sunken'
            }}
          >
            <Heading as="h4" sx={{ mb: 1 }}>
              The Ezsy Prize: $250
            </Heading>
            Inspired by our sponsor <Link href="https://ezsy.com/" target="_blank">Ezsy</Link>,
            this prize will go to the team / individual whose idea is the best
            at making people’s lives <i>ezsy-ier</i>.
          </Card>
          <Card
            sx={{
              p: [3, 3, 3],
              bg: 'sheet',
              boxShadow: 'none',
              border: '0.1px solid',
              borderColor: 'sunken'
            }}
          >
            <Heading as="h4" sx={{ mb: 1 }}>
              The Best Presented Prize (sponsored by the ASEAN Fintech Group):
              $250
            </Heading>
            This prize will go to the team / individual who displays the best
            presentation skills in their pitch at the finals. This prize has
            been sponsored by{' '}
            <Link href="https://www.aseanfintechgroup.com" target="_blank">
              the ASEAN Fintech Group
            </Link>
            .
          </Card>
        </Container>
      </Box>
      <Box bg="primary">
        <Container
          id="submit"
          variant="copy"
          as="form"
          method="POST"
          action="https://airtable-forms-proxy.hackclub.dev/api/appfav1jhxXDItkOL/Registrations?redirect=https://innovation-challenge.co/welcome"
          sx={{
            fontSize: 2,
            py: 4,
            display: 'grid',
            gap: '16px',
            color: 'white'
          }}
        >
          <Heading>Join The Challenge</Heading>
          <Box sx={{}}>
            <small>Team Name</small>
            <Input
              name="Team Name"
              bg="sheet"
              required
              sx={{ border: '0.1px solid', borderColor: 'sunken',boxShadow: 'card' }}
            />
          </Box>
          <Box sx={{}}>
            <small>Your Name</small>
            <Input
              name="Name"
              bg="sheet"
              required
              sx={{ border: '0.1px solid', borderColor: 'sunken',boxShadow: 'card' }}
            />
          </Box>
          <Box>
            <small>Contact Email (we'll send all the details here)</small>
            <Input
              bg="sheet"
              name="Email"
              required
              sx={{ border: '0.1px solid', borderColor: 'sunken',boxShadow: 'card' }}
            />
          </Box>
          <SquareButton
            as="h5"
            mx={0}
            sx={{ justifyContent: 'left', py: '12px', width: 'fit-content' }}
          >
            Join 🚀
          </SquareButton>
        </Container>
      </Box>
      <Box
        sx={{
          py: 4,
          pb: 4,
          textAlign: 'center'
        }}
      >
        <Container variant="copy">
          <Heading>Thank You To Our Sponsors & Partners</Heading>
          <Flex mt={3} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="https://www.aseanfintechgroup.com" target="_blank">
              <Image
                src="https://static.wixstatic.com/media/998f29_3d263ce2f09b410abef0a41c501247e5~mv2.png/v1/fill/w_356,h_96,al_c,usm_0.66_1.00_0.01/ASEAN%20FINTECH%20GRP%20LOGO.png"
                sx={{
                  background: 'white',
                  borderRadius: 8,
                  height: '80px',
                  mx: 1,
                  mb: 2,
                  border: '0.1px solid',
                  borderColor: 'sunken',
                  p: 3
                }}
              />
            </Link>
            <Link href="https://ezsy.com/" target="_blank">
              <Image
                src="https://ezsy.com/wp-content/uploads/2020/12/cropped-Ezsy-Final-01.png"
                sx={{
                  background: 'white',
                  borderRadius: 8,
                  height: '80px',
                  mx: 1,
                  mb: 2,
                  border: '0.1px solid',
                  borderColor: 'sunken'
                }}
              />
            </Link>
            <Link href="https://www.ibo.org" target="_blank">
            <Image
              src="https://www.ibo.org/Assets/Images/logo-163.svg"
              sx={{
                background: 'white',
                p: 3,
                borderRadius: 8,
                height: '80px',
                mx: 1,
                mb: 2,
                border: '0.1px solid',
                borderColor: 'sunken'
              }}
            />
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box bg="snow">
        <Container
          variant="copy"
          sx={{
            color: 'muted',
            py: 4,
            textAlign: ['left', 'center'],
            px: [3, 6]
          }}
        >
          <Box mb={2}>
            <Text as="b">
              Contact us at{' '}
              <Link
                href="mailto:contact@innovation-challenge.co"
                sx={{ opacity: 0.8 }}
              >
                contact@innovation-challenge.co
              </Link>
            </Text>
          </Box>
          Fiscally sponsored by Hack Club Bank, a project by The Hack Foundation
          (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
        </Container>
      </Box>
    </Box>
  )
}
