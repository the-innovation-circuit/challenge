import {
  Button,
  Box,
  Card,
  Container,
  Heading,
  Input,
  Grid,
  Link,
  Textarea,
  Image,
  Flex,
  Divider,
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

function GalleryImage({ src, ml, mr }) {
  return (
    <Image
      width={370}
      height={300}
      src={src}
      sx={{
        width: '370px',
        height: '200px',
        objectFit: 'cover',
        objectPosition: 'center',
        ml,
        mr,
        borderRadius: '12px'
      }}
    />
  )
}

const winners = [
  {
    name: 'Zarabica',
    description:
      'A coffee business dedicated to providing marginalised Filipino youth with the opportunities to develop sustainable art literacy skills. Created by Piper Yu in the Philippines.',
    youtube: 'https://www.youtube.com/embed/NA2u-BaRXp8',
    prize: 'Grand Prize Winner'
  },
  {
    name: 'Weblang 2.0',
    description:
      'A platform to provide an enriching culturally relevant language learning experience. Created by Hanqi Xiao, Shravan Gooty, Zian Chen, Nicholas Copland & Audrey Biller in the United States of America.',
    youtube: 'https://www.youtube.com/embed/rc4RGm8fmnE',
    prize: 'Best Presented Prize Winner'
  },
  {
    name: 'Political Creators',
    description:
      'An initiative to engage and educate young people about politics and current affairs through content. Created by Kayleigh Low & Noelle Ng in Singapore.',
    youtube: 'https://www.youtube.com/embed/5gG3CzIgI7g',
    prize: 'The Ezsy Prize Winner'
  }
]

const finalists = [
  {
    name: 'Feed',
    description:
      'A project that reduces food waste by streamlining the supply chain through seamless food transactions and intuitive food planning. Created by Jamie Emilie Alabin, Jove Calalo, Javier Luis Barreiro & Dani Peralta in the Philippines. ',
    youtube: 'https://www.youtube.com/embed/5e96CQF6kgc'
  },
  {
    name: 'Mrembo',
    description:
      'A sustainable makeup line that caters to a wide range of skin tones. Created by Nandini Nair, Priscilla Silfanus & Sanjana Vedula in Singapore.',
    youtube: 'https://www.youtube.com/embed/wCzOgW81yHw'
  }
]

const description = `Calling all students aged 12 to 19 in APAC! The Innovation Challenge is your chance to tackle the critical issues that your community faces. As an individual or as a team (5 people at most) you'll identify a issue, create an idea to solve that issue and then pitch your idea. The best pitch will win a SGD 1,000 cash prize to help kickstart the team's idea.`

export default function Home() {
  return (
    <Box>
      <Meta
        title="The Innovation Challenge"
        description={description}
        image="https://cloud-ck3svo7u2-hack-club-bot.vercel.app/0untitled_design-24.png"
      />
      <Script
        data-website-id="a1f88f64-44d5-4e26-8472-248fc8a8c7c9"
        src="https://analytics.sampoder.com/umami.js"
      />

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
            py: 5
          }}
        >
          <Heading sx={{ fontSize: [3, 4], fontWeight: 600 }}>
            Congratulations to the finalists and winners of the
          </Heading>
          <Heading sx={{ fontSize: [6, 7] }}>Innovation Challenge</Heading>
        </Container>
      </Box>
      <Container
        sx={{
          fontSize: 2,
          py: 4,
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr', '1fr 1fr 1fr'],
          gap: '16px'
        }}
      >
        {winners.map(finalist => (
          <Card>
            <iframe
              src={finalist.youtube}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{borderRadius: '8px'}}
            ></iframe>
            <Heading as="h3" mt={3} sx={{color: '#CD7F32'}}>
              {finalist.name}
            </Heading>
            <Box my={2} sx={{color: '#CD7F32'}}>{finalist.prize}</Box>
            <Divider />
            <Box>{finalist.description}</Box>
          </Card>
        ))}
        {finalists.map(finalist => (
          <Card>
            <iframe
              src={finalist.youtube}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{borderRadius: '8px'}}
            ></iframe>
            <Heading as="h3" mt={3} mb={2}>
              {finalist.name}
            </Heading>
            <Box>{finalist.description}</Box>
          </Card>
        ))}
      </Container>
      <Box sx={{ py: 4, bg: 'primary', color: 'white' }}>
        <Container>
          <Heading mt={1} as="h2" sx={{maxWidth: '600px', mb: 2}}>
            Thank you to our sponsors & partners for their kind support in making
            the Innovation Challenge possible.
          </Heading>
          <Flex mt={3} sx={{ flexWrap: 'wrap' }}>
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
            <Link href="https://www.midasacademy.com.sg" target="_blank">
              <Image
                src="https://www.midasacademy.com.sg/wp-content/uploads/2021/11/midas.png"
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
            <Link href="https://stickermule.com" target="_blank">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/sticker-mule.svg"
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
            <Link href="https://hackclub.com" target="_blank">
              <Image
                src="https://assets.hackclub.com/flag-standalone.png"
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
          Fiscally sponsored by the Hack Foundation (d.b.a. Hack Club), <br /> a
          501(c)(3) nonprofit (EIN: 81-2908499).
        </Container>
      </Box>
    </Box>
  )
}
