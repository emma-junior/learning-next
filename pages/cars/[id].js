import { useRouter } from "next/router";

const Cars = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Hello {id}</div>;
};

export default Cars;
