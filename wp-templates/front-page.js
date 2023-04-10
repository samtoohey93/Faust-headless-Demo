import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";
import Image from "next/image";

export default function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const snow1 = ({ src, width, quality }) => {
    return `https://media.giphy.com/media/5h3MrrvoFNgmA/giphy.gif${src}?w=${width}&q=${
      quality || 100
    }`;
  };
  const snow2 = ({ src, width, quality }) => {
    return `https://media.giphy.com/media/AoxD8DtSy7MCA/giphy.gif${src}?w=${width}&q=${
      quality || 100
    }`;
  };
  const snow3 = ({ src, width, quality }) => {
    return `https://media.giphy.com/media/WmhWN5VCNsBGg/giphy.gif${src}?w=${width}&q=${
      quality || 100
    }`;
  };
  const snow4 = ({ src, width, quality }) => {
    return `https://media.giphy.com/media/ztCmrnCN7jvby/giphy.gif${src}?w=${width}&q=${
      quality || 100
    }`;
  };

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
<<<<<<< Updated upstream
        <EntryHeader title="Welcome to the Faust Scaffold Blueprint" />

=======
>>>>>>> Stashed changes
        <section className={style.cardGrid}>
          <Link
            href="https://faustjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Documentation →</h3>
            <p>
              Learn more about Faust.js through guides and reference
              documentation.
            </p>
          </Link>

          <Link
            href="https://my.wpengine.com/atlas#/create/blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Blueprints →</h3>
            <p>Explore production ready Faust.js starter projects.</p>
          </Link>

          <Link
            href="https://wpengine.com/atlas"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Deploy →</h3>
            <p>
              Deploy your Faust.js app to Atlas along with your WordPress
              instance.
            </p>
          </Link>

          <Link
            href="https://github.com/wpengine/faustjs"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Contribute →</h3>
            <p>Visit us on GitHub to explore how you can contribute!</p>
          </Link>
        </section>
        <div className="breakup"> {""}</div>
        <br></br>
        <EntryHeader title="Nova... do you wanna build a snowman?" />

        <section className={style.cardGrid}>
          <Image
            className="snow"
            loader={snow1}
            src="https://media.giphy.com/media/5h3MrrvoFNgmA/giphy.gif"
            width={300}
            height={300}
          />
          <Image
            className="snow"
            loader={snow2}
            src="https://media.giphy.com/media/AoxD8DtSy7MCA/giphy.gif"
            width={300}
            height={300}
          />
          <Image
            className="snow"
            loader={snow3}
            src="https://media.giphy.com/media/WmhWN5VCNsBGg/giphy.gif"
            width={300}
            height={300}
          />
          <Image
            className="snow"
            loader={snow4}
            src="https://media.giphy.com/media/ztCmrnCN7jvby/giphy.gif"
            width={300}
            height={300}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
