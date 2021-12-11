import {
  Button,
  Box,
  Card,
  Container,
  Heading,
  Input,
  Link,
  Textarea,
  Text
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

const description = `Calling all students aged 12 to 18 in APAC! The Innovation Challenge is your chance to tackle the critical issues that your community faces. As an individual or as a team (5 people at most) you'll identify a issue, create an idea to solve that issue and then pitch your idea. The best pitch will win a SGD 1,000 cash prize to help kickstart the team's idea.`

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
            display: 'grid',
            flexDirection: 'column',
            gap: '8px',
            py: 6
          }}
        >
          <Heading sx={{ fontSize: 4, fontWeight: 600 }}>
            Pitch your innovative idea & potentially win $1,000 at the
          </Heading>
          <Heading sx={{ fontSize: 7 }}>Innovation Challenge</Heading>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="#submit" sx={{ textDecoration: 'none!important' }}>
              <SquareButton>
                Submit Your Idea <span style={{ fontSize: '0.9em' }}>(</span>
                closes March 21st<span style={{ fontSize: '0.9em' }}>)</span>
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
            March 21st. Here's an example of a video.
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
          <Card
            sx={{
              p: [3, 3, 3],
              py: [2, 2, 2],
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
        </Container>
      </Box>
      <Container
        id="submit"
        variant="copy"
        as="form"
        method="POST"
        action="https://airtable-forms-proxy.hackclub.dev/api/appfav1jhxXDItkOL/Submissions?redirect=https://innovation-challenge.co/congrats"
        sx={{ fontSize: 2, py: 4, display: 'grid', gap: '16px' }}
      >
        <Heading>Submit Your Idea</Heading>
        <Box>
          <small>Team Name</small>
          <Input
            name="Name"
            bg="sheet"
            sx={{ border: '0.1px solid', borderColor: 'sunken' }}
          />
        </Box>
        <Box>
          <small>Contact Email</small>
          <Input
            bg="sheet"
            name="Email"
            sx={{ border: '0.1px solid', borderColor: 'sunken' }}
          />
        </Box>
        <Box>
          <small>List of Team Member Names</small>
          <Textarea
            bg="sheet"
            name="Members"
            sx={{ border: '0.1px solid', borderColor: 'sunken' }}
          />
        </Box>
        <Box>
          <small>Link to Pitch Video (through YouTube, Vimeo etc.)</small>
          <Input
            bg="sheet"
            name="Video"
            sx={{ border: '0.1px solid', borderColor: 'sunken' }}
          />
        </Box>
        <Box>
          <small>Brief Summary of Project (will not be judged)</small>
          <Textarea
            bg="sheet"
            name="Summary"
            sx={{ border: '0.1px solid', borderColor: 'sunken' }}
          />
        </Box>
        <SquareButton
          bg="primary"
          color="white"
          as="h5"
          mx={0}
          sx={{ justifyContent: 'left', py: '12px', width: 'fit-content' }}
        >
          Submit Your Idea 🚀
        </SquareButton>
      </Container>
      <Box bg="snow">
        <Container
          variant="copy"
          sx={{ color: 'muted', py: 4, textAlign: 'center', px: 6 }}
        >
          <Box mb={2}>
            <Text as="b">
              Contact us at{' '}
              <Link href="mailto:contact@innovation-challenge.co" sx={{ opacity: 0.8}}>
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
