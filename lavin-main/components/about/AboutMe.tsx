import Link from "@/components/Link";
const AboutMe = () => {
  return (
    <section>
      <h2 id="about" className="scroll-margin-nav">
        <Link className="text-3xl" href="#about">
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>Raditya Alia Pratama</b>, you can call me{" "}
        <b>Raditya</b> or <b>Dit</b> for short. If you&apos;re my school/college
        friend you maybe know me as <b>Lavin</b>.
      </p>
      <p>
        I grew up in a city called{" "}
        <Link
          className="underline"
          isExternal
          href="https://www.google.com/search?q=kota+tangerang"
        >
          Kota Tangerang
        </Link>
        . Attend school in{" "}
        <Link
          className="underline"
          isExternal
          href="https://smk.nusantara1.sch.id/"
        >
          SMK Nusantara 1
        </Link>{" "}
        with my major in{" "}
          <Link className="underline" href="https://www.gamelab.id/news/1809-mengenal-jurusan-pplg-definisi-keunggulan-dan-prospek-kerjanya" isExternal>
        <i>PPLG (Software & Game Development)</i>
        </Link>, and with that I hope after graduate from this school I will become a programming expert (hopefully).
      </p>
      <p>
        I love exploring everything related to technology. And i like
        join many community and orgs to expand my knowledge, besides liking coding <b>I also like about server, I also made pterodactyl panel, a dashboard for panels</b>, besides that I am also interested in Design, I also like to design such as logos, posters, etc., the point is I really like technology.
      </p>
    </section>
  );
};

export default AboutMe;
