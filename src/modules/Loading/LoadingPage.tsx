import Spinner from "src/ui/Spinner/Spinner";

const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-[black] flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default LoadingPage;
