import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="h-auto bg-white text-white">
        <div className="px-5 py-2 bg-red-700 flex justify-start items-center space-x-2">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="Picture of the author"
          />
          <pre>Flash Food</pre>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <div className="justify-between text-center space-y-1 w-[90%] mb-4">
          <h2 className="text-3xl my-custom-text">
            Seu pedido rápido como um flash!
          </h2>
          <h3 className="text-2xl my-custom-text">
            Delivery de comida, bebida, farmácia e muito mais.
          </h3>
        </div>
        <div className="space-y-2 w-[90%]">
          <Input
            className="border-white shadow-md"
            placeholder="Escolha sua cidade"
          />
          <Input
            className="border-white shadow-md"
            placeholder="Escolha seu bairro"
          />

          <Button className="bg-red-700 rounded-xl w-full">Buscar</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
