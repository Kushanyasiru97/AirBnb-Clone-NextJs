import { Label } from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader } from "@/components/ui/card";
import { Counter } from "@/app/components/Counter";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";
import { CreateDescription } from "@/app/action";


export default function DescriptionPage({params}:{params:{id:string}}){
    return(
        <>
        <div className="w-3/5 mx-auto">
        <h3 className="text-3xl font-semibold tracking-tight transition-colors">
            Please Describe your Home as good as you can
        </h3>
        </div>
        <form action={CreateDescription}>
            <input type="hidden" name="homeId" value={params.id} />
            <div className="mx-auto w-3/5 mt-10 flex flex-col gp-y-5 mb-36">
            <div className="flex flex-col gap-y-2">
                <Label>Title</Label>
                <Input name="title" required placeholder="Short and simple..." />
            </div>
            <div className="flex flex-col gap-y-2">
                <Label>Description</Label>
                <Textarea name="description" required placeholder="Please describe your Residence" />
            </div>
            <div className="flex flex-col gap-y-2">
                <Label>Price</Label>
                <Input name="price" type="number" required placeholder="Price per night for USD" min={10}/>
            </div>
            <div className="flex flex-col gap-y-2">
                <Label>Image</Label>
                <Input name="image" type="file" required  />
            </div>

            <Card>
                <CardHeader className="flex flex-col gap-y-2">
                    <div className="flex item-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="underline font-medium">Guests</h3>
                            <p>How many guests do you Want?</p>
                        </div>
                        <Counter name="guest"/>
                    </div>
                    <div className="flex item-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="underline font-medium">Rooms</h3>
                            <p>How many Rooms do you have?</p>
                        </div>
                        <Counter name="room"/>
                    </div>
                    <div className="flex item-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="underline font-medium">Bathrooms</h3>
                            <p> How many Bathrooms do you have?</p>
                        </div>
                        <Counter name="bathroom"/>
                    </div>
                </CardHeader>
            </Card>
            </div>
            <CreationBottomBar />
        </form>
        </>
    )
}