import Head from "next/head";

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <ul>
        <li>
          <div>Portfolio 1</div>
        </li>
        <li>
          <div>Portfolio 2</div>
        </li>
        <li>
          <div>Portfolio 3</div>
        </li>
      </ul>
    </>
  );
};

export default Portfolio;

export function getServerSideProps(context) {
  return {
    props: {
      portfolio: [],
    },
  };
}
