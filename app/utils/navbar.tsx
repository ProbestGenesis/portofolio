import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center mx-4">
        <div className="flex items-center justify-center gap-1">
            <Avatar>
                <AvatarImage src="" >
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="#f0f0f0"/>
                        <circle cx="23" cy="27" r="20" fill="#ffcc00"/>
                        <circle cx="75" cy="17" r="30" fill="#ff6666"/>
                        <circle cx="25" cy="85" r="30" fill="#66ccff"/>
                        <circle cx="75" cy="75" r="20" fill="#66ff66"/>
                </svg>
                </AvatarImage>
                <AvatarFallback>
                        PRO
                </AvatarFallback>
            </Avatar>
            <h1 className="~text-sm/2xl">ProBEST GENESIS</h1>
        </div>

        <div>
            <p className="text-muted-foreground text-xs max-sm:hidden">Build with nextjs, tailwindcss, and motion</p>
        </div>
    </div>
  )
}

export default Navbar