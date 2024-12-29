import { Avatar as Profil, AvatarImage as ProfilImage } from "@/components/ui/profil";
import { Facebook, Github, Youtube } from "lucide-react";
import Cart from "./utils/skills/cart";
import ProjetModule from "./utils/projet";
import AboutMe from "./utils/about";
import profil from "@/assets/profil.png"


export default function Home() {
  return (<div className="flex items-center justify-center flex-col gap-12">
    <div className="flex items-center justify-center flex-col space-y-4">
          <p className="text-primary font-bold ~text-lg/3xl">
                BEST PROGRAMMING COURSES
          </p>
          

          <div className="flex space-x-8">
                <div className="rounded-full bg-secondary p-2 border hover:bg-secondary-foreground transition-colors"><Github/></div> 
                <div className="rounded-full bg-secondary p-2 border hover:bg-secondary-foreground transition-colors"><Facebook/></div> 
                <div className="rounded-full bg-secondary p-2 border hover:bg-secondary-foreground transition-colors"><Youtube/></div> 
          </div>
    </div>


    <div className="h-[60vh] flex items-center gap-12 w-[40%] justify-center mx-20 max-sm:flex-col max-sm:justify-center">
        <div>
             <span className="flex flex-col space-x-1">
               <h1 className="~text-xl/3xl font-bold uppercase text-nowrap" >dimon oyetounde ange</h1>
               <p className="~text-xs/sm">Programming is grall</p>
              </span> 
        </div>

        <div>

          <Profil>
            <ProfilImage src={profil.src} alt="profil"/>
          </Profil>
        </div>
    </div>


    <div className="">
      <Cart/>
    </div>


    <div className="">
      <ProjetModule/>
    </div>


    <div>
      <AboutMe/>
    </div>
  </div>);
}
