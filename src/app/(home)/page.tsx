import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="justify-between text-center space-y-1 w-[90%] mb-4">
        <h2 className="text-3xl my-custom-text">
          Seu pedido rápido como um flash!
        </h2>
        <h3 className="text-2xl my-custom-text">
          Delivery de Comida, bebida e farmácia e muito mais.
        </h3>
      </div>
      <div className="space-y-2 w-[90%]">
        <Input className="border-white shadow-md" placeholder="Escolha sua cidade" />
        <Input className="border-white shadow-md" placeholder="Escolha seu bairro"/>

        <Button className="bg-red-600 rounded-xl w-full">Buscar</Button>
      </div>
    </div>
  );
};

export default Home;
