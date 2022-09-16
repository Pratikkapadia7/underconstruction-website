import type { NextPage } from "next";
import Head from "next/head";
import UnderconstructionIcon from "../src/component/Underconstruction.Icon";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pratik Kapadia</title>
        <meta
          name="description"
          content="This is Pratik Kapadia's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            width: "100%",
            display: "flex",
            paddingTop: "50px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UnderconstructionIcon />
          <p style={{ fontSize: "32px", fontWeight: "500" }}>
            Website is under construction
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
