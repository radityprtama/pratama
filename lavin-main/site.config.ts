export default {
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL &&
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
    "https://lavin-lake.vercel.app/",
  description:
    "Personal website of Raditya Alia Pratama. A passionate software engineer that focused on the web platform.",
};
