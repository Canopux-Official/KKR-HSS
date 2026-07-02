import { cn } from "@/lib/utils";

import { Grid } from "@/components/ui/Grid";

import { Heading } from "@/components/ui/Heading";

import { Text } from "@/components/ui/Text";

import { EditorialImage } from "@/components/media/EditorialImage";

import { EditorialPlaceholder } from "@/components/media/EditorialPlaceholder";

import { Reveal } from "@/components/ui/Reveal";

import type { SitePhoto } from "@/types/content";



interface ContentBlockProps {

  title?: string;

  overline?: string;

  paragraphs?: string[];

  imageAlt?: string;

  image?: SitePhoto;

  imagePosition?: "left" | "right";

  className?: string;

}



export function ContentBlock({

  title,

  overline,

  paragraphs,

  imageAlt,

  image,

  imagePosition = "right",

  className,

}: ContentBlockProps) {

  const hasImage = Boolean(image ?? imageAlt);



  return (

    <div className={cn(className)}>

      <Grid>

        <Reveal

          className={cn(

            "col-span-4 sm:col-span-8",

            hasImage ? "lg:col-span-5" : "lg:col-span-8 lg:col-start-3",

            imagePosition === "right" ? "lg:col-start-1" : "lg:col-start-7 lg:order-2"

          )}

        >

          {overline && (

            <Text as="span" variant="overline" className="block mb-4">

              {overline}

            </Text>

          )}

          {title && (

            <Heading as="h3" scale="heading-lg" className="mb-6">

              {title}

            </Heading>

          )}

          <div className="space-y-6 max-w-prose">

            {paragraphs?.map((paragraph, index) => (

              <Text key={index} variant="body" muted>

                {paragraph}

              </Text>

            ))}

          </div>

        </Reveal>

        {hasImage && (

          <Reveal

            className={cn(

              "col-span-4 sm:col-span-8 lg:col-span-6 mt-12 lg:mt-0",

              imagePosition === "right" ? "lg:col-start-7" : "lg:col-start-1 lg:order-1"

            )}

            delay={0.1}

          >

            {image ? (

              <EditorialImage photo={image} aspect="portrait" />

            ) : (

              imageAlt && (

                <EditorialPlaceholder alt={imageAlt} aspect="portrait" />

              )

            )}

          </Reveal>

        )}

      </Grid>

    </div>

  );

}

