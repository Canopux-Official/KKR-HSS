import { Grid } from "@/components/ui/Grid";

import { Heading } from "@/components/ui/Heading";

import { Text } from "@/components/ui/Text";

import { EditorialImage } from "@/components/media/EditorialImage";

import { EditorialPlaceholder } from "@/components/media/EditorialPlaceholder";

import { Reveal } from "@/components/ui/Reveal";

import type { FacilityItem } from "@/types/content";



interface FacilityBlockProps {

  facility: FacilityItem;

  imagePosition?: "left" | "right";

}



export function FacilityBlock({

  facility,

  imagePosition = "right",

}: FacilityBlockProps) {

  return (

    <article id={facility.id} className="scroll-mt-32">

      <Grid>

        <Reveal

          className={

            imagePosition === "right"

              ? "col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-1"

              : "col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-8 lg:order-2"

          }

        >

          <Text as="span" variant="overline" className="block mb-4">

            Facility

          </Text>

          <Heading as="h2" scale="heading-xl">

            {facility.title}

          </Heading>

          <Text variant="body" muted className="mt-6 max-w-prose">

            {facility.description}

          </Text>

          {facility.features && facility.features.length > 0 && (

            <ul className="mt-8 space-y-3">

              {facility.features.map((feature, index) => (

                <li key={index}>

                  <Text variant="body-sm" muted>

                    {feature}

                  </Text>

                </li>

              ))}

            </ul>

          )}

        </Reveal>

        <Reveal

          className={

            imagePosition === "right"

              ? "col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0"

              : "col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-1 lg:order-1 mt-8 lg:mt-0"

          }

          delay={0.1}

        >

          {facility.image ? (

            <EditorialImage photo={facility.image} aspect="landscape" />

          ) : (

            <EditorialPlaceholder

              alt={facility.imageAlt}

              aspect="landscape"

            />

          )}

        </Reveal>

      </Grid>

    </article>

  );

}

