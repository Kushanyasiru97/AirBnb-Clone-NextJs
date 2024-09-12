"use client"

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormState } from "react-dom";

export function CreationSubmit(){
    const {pending} = useFormState();

    return(
        <>
        {pending ?(
            <Button disabled size="lg">
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                Please Wait...
            </Button>
        ): (
            <Button size="lg">Next</Button>
        )}
        </>
    )
}