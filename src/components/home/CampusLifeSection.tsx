import { campusLifeContent } from "@/content/homepage";

import { sitePhotos } from "@/content/site-photos";

import { Section } from "@/components/layout/Section";

import { Container } from "@/components/ui/Container";

import { Grid } from "@/components/ui/Grid";

import { Text } from "@/components/ui/Text";

import { Link } from "@/components/ui/Link";

import { SectionHeader } from "@/components/editorial/SectionHeader";

import { EditorialImage } from "@/components/media/EditorialImage";

import { Reveal } from "@/components/ui/Reveal";



export function CampusLifeSection() {

  const titleId = "campus-life-heading";



  return (

    <Section variant="muted" ariaLabelledby={titleId}>

      <Container>

        <Reveal className="mb-12 lg:mb-0">

          <EditorialImage

            photo={sitePhotos.campusCourtyard}

            aspect="landscape"

            className="col-span-full"

            sizes="100vw"

          />

        </Reveal>



        <Grid className="mt-12 lg:mt-16">

          <Reveal className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-1">

            <SectionHeader

              overline={campusLifeContent.overline}

              title={campusLifeContent.title}

              titleId={titleId}

            />

          </Reveal>

          <Reveal

            className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7"

            delay={0.1}

          >

            <div className="space-y-6 max-w-prose lg:pt-12">

              {campusLifeContent.paragraphs.map((paragraph, index) => (

                <Text key={index} variant="body" muted>

                  {paragraph}

                </Text>

              ))}

            </div>

            <div className="mt-10">

              <Link href={campusLifeContent.link.href} showArrow>

                {campusLifeContent.link.label}

              </Link>

            </div>

          </Reveal>

        </Grid>

      </Container>

    </Section>

  );

}

