
import Image from "next/image"

export default function Speaker(props) {
    return (
    
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

        <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={"/images/speakers/" + props.firstName + "-" + props.lastName + ".jpg"}
            alt={props.firstName + ' ' + props.lastName}
            width="512"
            height="512"
        />

        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
                <p class="text-lg font-medium">
                    {props.text}
                </p>
            </blockquote>
            <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                    {props.firstName} {props.lastName}
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                    {props.description}
                </div>
            </figcaption>
        </div>
        
    </figure>
    )

}