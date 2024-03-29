import Link from 'next/link'
import {Button} from "@/components/ui/button";

export default function Home() {

    return (
        <Link href="/sara">
            <Button>
                Category
            </Button>
        </Link>
    )
}
