import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as "en" | "es")) notFound();
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
