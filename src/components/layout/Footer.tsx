import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { gmailComposeUrl } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-charcoal text-warm-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container className="py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          <div className="lg:col-span-4">
            <NextLink
              href="/"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span className="block font-display text-heading-md text-warm-white">
                {siteConfig.shortName}
              </span>
            </NextLink>
            <Text
              variant="body-sm"
              className="mt-3 text-stone-light"
            >
              {siteConfig.location}
            </Text>
            <address className="mt-6 not-italic space-y-2">
              <Text variant="body-sm" className="text-stone-light">
                {siteConfig.address}
              </Text>
              <Text variant="body-sm" className="text-stone-light">
                {siteConfig.phone.startsWith("[") ? (
                  siteConfig.phone
                ) : (
                  <Link href={`tel:${siteConfig.phone}`} variant="on-dark">
                    {siteConfig.phone}
                  </Link>
                )}
              </Text>
              <Text variant="body-sm" className="text-stone-light">
                {siteConfig.email.startsWith("[") ? (
                  siteConfig.email
                ) : (
                  <Link href={gmailComposeUrl(siteConfig.email)} variant="on-dark">
                    {siteConfig.email}
                  </Link>
                )}
              </Text>
            </address>
          </div>

          <nav
            className="lg:col-span-2"
            aria-label="About navigation"
          >
            <Text
              as="span"
              variant="overline"
              className="block mb-4 text-gold-light"
            >
              About
            </Text>
            <ul className="space-y-3">
              {footerNavigation.about.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="on-dark" className="text-body-sm font-normal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="lg:col-span-2"
            aria-label="Academics navigation"
          >
            <Text
              as="span"
              variant="overline"
              className="block mb-4 text-gold-light"
            >
              Academics
            </Text>
            <ul className="space-y-3">
              {footerNavigation.academics.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="on-dark" className="text-body-sm font-normal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="lg:col-span-2"
            aria-label="Admissions navigation"
          >
            <Text
              as="span"
              variant="overline"
              className="block mb-4 text-gold-light"
            >
              Admissions
            </Text>
            <ul className="space-y-3">
              {footerNavigation.admissions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="on-dark" className="text-body-sm font-normal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="lg:col-span-2"
            aria-label="Connect navigation"
          >
            <Text
              as="span"
              variant="overline"
              className="block mb-4 text-gold-light"
            >
              Connect
            </Text>
            <ul className="space-y-3">
              {footerNavigation.connect.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="on-dark" className="text-body-sm font-normal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2">
              <Text variant="caption" className="text-stone-light">
                Follow us
              </Text>
              <ul className="space-y-2">
                {(
                  [
                    ["Facebook", siteConfig.social.facebook],
                    ["Instagram", siteConfig.social.instagram],
                    ["YouTube", siteConfig.social.youtube],
                  ] as const
                ).map(([label, href]) =>
                  href.startsWith("[") ? null : (
                    <li key={label}>
                      <Link
                        href={href}
                        variant="on-dark"
                        className="text-body-sm font-normal"
                        external
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </nav>
        </div>

        <Divider className="mt-8 lg:mt-10 bg-charcoal-light" />

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Text variant="caption" className="text-stone-light">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </Text>
          <Text variant="caption" className="text-stone-light">
            Bhadrak, Odisha, India
          </Text>
        </div>
      </Container>
    </footer>
  );
}
