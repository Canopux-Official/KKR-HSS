import { galleryContent } from "@/content/homepage";

import { Section } from "@/components/layout/Section";

import { Container } from "@/components/ui/Container";

import { Link } from "@/components/ui/Link";

import { SectionHeader } from "@/components/editorial/SectionHeader";

import { EditorialImage } from "@/components/media/EditorialImage";

import { Reveal } from "@/components/ui/Reveal";

import { cn } from "@/lib/utils";



const layoutClasses = [

  "col-span-4 sm:col-span-5 lg:col-span-7",

  "col-span-4 sm:col-span-3 lg:col-span-5",

  "col-span-4 sm:col-span-4 lg:col-span-4",

  "col-span-4 sm:col-span-8 lg:col-span-8",

  "col-span-4 sm:col-span-4 lg:col-span-4",

  "col-span-4 sm:col-span-8 lg:col-span-8",

];



export function GallerySection() {

  const titleId = "gallery-heading";



  return (

    <Section variant="muted" ariaLabelledby={titleId}>

      <Container>

          <SectionHeader
            overline={galleryContent.overline}
            title={galleryContent.title}
            lead={galleryContent.lead}
            titleId={titleId}
          />



        <div className="mt-8 lg:mt-10 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-gutter-sm sm:gap-gutter">

          {galleryContent.images.map((image, index) => (

            <Reveal

              key={image.id}

              className={cn(layoutClasses[index])}

              delay={index * 0.06}

            >

              <EditorialImage

                photo={image}

                aspect={image.aspect}

                className="h-full [&>div]:h-full"

              />

            </Reveal>

          ))}

        </div>



        <div className="mt-6 lg:mt-8">

          <Link href={galleryContent.link.href} showArrow>

            {galleryContent.link.label}

          </Link>

        </div>

      </Container>

    </Section>

  );

}

