import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="50"
      width="50"
      color="#0d6efd"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};


export default Loader;