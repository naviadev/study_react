import MinamInterface from "../static/basic-data";

const Minam: React.FC<MinamInterface> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
};

export default Minam;