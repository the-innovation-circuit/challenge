import Head from "next/head";
import NextImage from "next/image";
import { Container, Heading, Grid, Text, Box } from "theme-ui";
import Link from "next/link"

function Image({ src, ...props }) {
  return (
      <NextImage
        src={src}
        {...props}
        onClick={()=> window.location.href = src}
      />
  )
}

export default function Home() {
  return (
    <div>
      <Container sx={{ px: "0px" }}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Photos of Innovation Circuit Events</title>
          <meta
            name="title"
            content="Photos of the Innovation Circuit Events"
          />
          <meta
            name="description"
            content="These photos capture the atmosphere of an Innovation Circuit event."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Photos of Innovation Circuit Events"
          />
          <meta
            property="og:description"
            content="These photos capture the atmosphere of an Innovation Circuit event."
          />
          <meta
            property="og:image"
            content="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/2screenshot_2021-04-05_at_7.23.57_pm.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Photos of Innovation Circuit Events"
          />
          <meta
            property="twitter:description"
            content="These photos capture the atmosphere of an Innovation Circuit event."
          />
          <meta
            property="twitter:image"
            content="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/2screenshot_2021-04-05_at_7.23.57_pm.png"
          />
        </Head>
        <Heading as='h1' sx={{ mt: 4, px: '0px', fontSize: '2rem' }}>Innovation Challenge Photos</Heading>
        <Text as="p" sx={{  mt: "8px", mb: '8px' }}>
          Click on any photo for the full file.
        </Text>
        <Grid gap={3} columns={[2, 3, 3]} sx={{ marginBottom: "18px" }}>
          <Image
            width={200}
            height={300}
            src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/0gems_innovation_week-2763-min.jpg"
          />
          <Image
            width={200}
            height={300}
            src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/1gems_innovation_week-2831-min.jpg"
          />
          <Image
            width={200}
            height={300}
            src="https://cloud-okol6b1vm-hack-club-bot.vercel.app/2gems_innovation_week-2754-min.jpg"
          />
          <Image
            width={200}
            height={300}
            src="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/0screenshot_2021-04-05_at_7.25.05_pm.png"
          />
          <Image
            width={200}
            height={300}
            src="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/1screenshot_2021-04-05_at_7.24.29_pm.png"
          />
          <Image
            width={200}
            height={300}
            src="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/2screenshot_2021-04-05_at_7.23.57_pm.png"
          />
          <Image
            width={200}
            height={300}
            src="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/3screenshot_2021-04-05_at_7.23.42_pm.png"
          />
          <Image
            width={200}
            height={300}
            src="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/4screenshot_2021-04-05_at_7.23.14_pm.png"
          />
        </Grid>
        <style>{`img{object-fit: cover;}`}</style>
      </Container>
    </div>
  );
}
