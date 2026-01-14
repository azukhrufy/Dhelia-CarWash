import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Dhelia Carwash - Cuci Mobil Robotic terbaik di Bandung dan Cimahi. Teknologi robotic canggih untuk hasil bersih maksimal, cepat, dan aman tanpa goresan. Layanan cuci mobil otomatis 24/7 dengan detailing profesional."
        />
        <meta
          name="keywords"
          content="cuci mobil robotic bandung, cuci mobil robotic cimahi, carwash robotic bandung, cuci mobil otomatis bandung, cuci mobil bandung, dhelia carwash, robotic carwash cimahi, cuci mobil cepat bandung, detailing mobil bandung, ceramic coating bandung, cuci mobil 24 jam bandung"
        />
        <meta name="author" content="Dhelia Carwash" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dheliacarwash.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dheliacarwash.com" />
        <meta
          property="og:title"
          content="Dhelia Carwash - Cuci Mobil Robotic Bandung & Cimahi"
        />
        <meta
          property="og:description"
          content="Pionir cuci mobil robotic di Bandung dan Cimahi. Teknologi touchless modern, hasil bersih luar dalam, detailing profesional. Buka 24/7!"
        />
        <meta property="og:image" content="/images/dhelia-logo.jpg" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dheliacarwash.com" />
        <meta
          property="twitter:title"
          content="Dhelia Carwash - Cuci Mobil Robotic Bandung & Cimahi"
        />
        <meta
          property="twitter:description"
          content="Pionir cuci mobil robotic di Bandung dan Cimahi. Teknologi touchless modern, hasil bersih luar dalam, detailing profesional."
        />
        <meta property="twitter:image" content="/images/dhelia-logo.jpg" />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://dheliacarwash.com",
              name: "Dhelia Carwash",
              description:
                "Cuci Mobil Robotic terbaik di Bandung dan Cimahi dengan teknologi touchless modern",
              image: "/images/dhelia-logo.jpg",
              url: "https://dheliacarwash.com",
              telephone: "+6282129054992",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bandung",
                addressLocality: "Bandung",
                addressRegion: "Jawa Barat",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.9175,
                longitude: 107.6191,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Bandung",
                },
                {
                  "@type": "City",
                  name: "Cimahi",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Layanan Cuci Mobil",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cuci Mobil Robotic",
                      description:
                        "Cuci mobil otomatis dengan teknologi robotic touchless",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Detailing Mobil",
                      description:
                        "Layanan detailing profesional untuk interior dan eksterior",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ceramic Coating",
                      description:
                        "Perlindungan cat mobil dengan ceramic coating premium",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
