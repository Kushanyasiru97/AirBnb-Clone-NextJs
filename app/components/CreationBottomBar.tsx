import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"
import { CreationSubmit } from "./SubmitButton"

export function CreationBottomBar(){
    return (
        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
                <div className="flex items-center justify-between mx-auto lg:px-10 h-full">
                    <Button variant="secondary" size="lg">
                        <Link href="/">Cancel</Link>
                    </Button>
                    <CreationSubmit />
                </div>
            </div>
            
    )
}