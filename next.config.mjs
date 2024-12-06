import withSvgr from "next-svgr";

const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "assets.adidas.com",
      "acdn.mitiendanube.com",
      "media2.solodeportes.com.ar",
      "nikearprod.vtexassets.com",
      "static.nike.com",
    ],
  },
  i18n: {
    locales: ["es", "en"], // Idiomas disponibles
    defaultLocale: "es", // Idioma predeterminado
  },
});

export default nextConfig;
