import { createCategoryPage } from "@/app/action";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";
import SelectCategory from "@/app/components/SelectCategory";

export default function CreateRoute({params}: {params: {id: string}}){
    return (
        <>
        <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">Hello Im Kushan Yasiru</h2>
        </div>
        <form action={createCategoryPage}>
            <input type="hidden" name="homeId" value={params.id}/>
            <SelectCategory/>
            <CreationBottomBar/>
        </form>
        </>
    )
}