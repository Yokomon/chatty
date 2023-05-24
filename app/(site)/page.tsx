import Image from "next/image";
import { AuthForm } from "./components/AuthForm";

export default function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center flex-col py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height={66}
          width={66}
          src={"/images/logo.png"}
          alt="site-logo"
          className="mx-auto w-auto"
        />
        <h2 className="text-center text-3xl mt-4 text-gray-900 font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </section>
  );
}
