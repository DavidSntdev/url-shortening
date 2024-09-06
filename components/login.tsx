import { Button } from "@nextui-org/button";

export default function Login() {
  return (
    <>
      <Button className="bg-transparent text-grayishViolet font-bold">
        Login
      </Button>
      <Button className="bg-cyan rounded-full px-4 font-bold text-white">
        Sign Up
      </Button>
    </>
  );
}
