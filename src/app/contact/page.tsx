import { createPageMetadata } from "@/lib/metadata";
import { PageLayout, PageHero } from "@/components/layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { LocationMap } from "@/components/ui/LocationMap";
import { ContactForm } from "@/components/forms";
import { WebPageJsonLd } from "@/components/seo";
import { siteConfig } from "@/config/site";
import {
  contactPageMeta,
  contactIntro,
  officeHours,
  departmentContacts,
  emergencyContact,
  schoolLocation,
} from "@/content/contact";

export const metadata = createPageMetadata(contactPageMeta);

export default function ContactPage() {
  return (
    <PageLayout>
      <WebPageJsonLd
        name={contactPageMeta.title}
        description={contactPageMeta.description}
        path="/contact"
      />
      <PageHero
        overline={contactIntro.overline}
        title={contactIntro.title}
        lead={contactIntro.lead}
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <Container>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-5">
              <Text as="h2" variant="overline" className="block mb-6">Visit us</Text>
              <address className="not-italic space-y-4">
                <Text variant="body-lg" className="font-medium">{siteConfig.name}</Text>
                <Text variant="body" muted>{siteConfig.address}</Text>
                <Text variant="body" muted>{siteConfig.location}</Text>
                <Text variant="body" muted>
                  {siteConfig.phone.startsWith("[") ? siteConfig.phone : (
                    <Link href={`tel:${siteConfig.phone}`} className="font-normal">{siteConfig.phone}</Link>
                  )}
                </Text>
                <Text variant="body" muted>
                  {siteConfig.email.startsWith("[") ? siteConfig.email : (
                    <Link href={`mailto:${siteConfig.email}`} className="font-normal">{siteConfig.email}</Link>
                  )}
                </Text>
              </address>

              <div className="mt-12">
                <Text as="h2" variant="overline" className="block mb-6">Office hours</Text>
                <dl className="space-y-3">
                  <div><Text as="dt" variant="body-sm" className="font-medium">Weekdays</Text><Text as="dd" variant="body-sm" muted>{officeHours.weekdays}</Text></div>
                  <div><Text as="dt" variant="body-sm" className="font-medium">Saturday</Text><Text as="dd" variant="body-sm" muted>{officeHours.saturday}</Text></div>
                  <div><Text as="dt" variant="body-sm" className="font-medium">Sunday</Text><Text as="dd" variant="body-sm" muted>{officeHours.sunday}</Text></div>
                </dl>
              </div>

              <div className="mt-12">
                <Text as="h2" variant="overline" className="block mb-6">Department contacts</Text>
                <ul className="space-y-6">
                  {departmentContacts.map((dept) => (
                    <li key={dept.id}>
                      <Text variant="body" className="font-medium">{dept.department}</Text>
                      {dept.phone && <Text variant="body-sm" muted className="mt-1">{dept.phone}</Text>}
                      {dept.email && <Text variant="body-sm" muted>{dept.email}</Text>}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 p-6 bg-surface-muted border border-border">
                <Text variant="body-sm" className="font-medium">Emergency contact</Text>
                <Text variant="body-sm" muted className="mt-2">{emergencyContact.note}</Text>
                <Text variant="body-sm" muted className="mt-2">{emergencyContact.phone}</Text>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0">
              <Text as="h2" variant="overline" className="block mb-6">Send a message</Text>
              <ContactForm />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <Text as="h2" variant="overline" className="block mb-4">
            {schoolLocation.title}
          </Text>
          <Text variant="body" muted className="max-w-prose mb-8">
            {schoolLocation.description}
          </Text>
          <LocationMap
            latitude={siteConfig.mapCenter.latitude}
            longitude={siteConfig.mapCenter.longitude}
            zoom={siteConfig.mapCenter.zoom}
            title={`${siteConfig.name} — map location`}
          />
          <div className="mt-6">
            <Link href={schoolLocation.mapsUrl} showArrow>
              Open in Google Maps
            </Link>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
