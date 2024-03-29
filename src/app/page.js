import Link from 'next/link'
import {Button} from "@/components/ui/button";

export default function Home() {

    return (
        <div className={'flex flex-col items-center w-full gap-2 py-4'}>
            <Link href="/sara-hoxha">
                <Button>
                    sara-hoxha
                </Button>
            </Link>
            <Link href="/noizy">
                <Button>
                    noizy
                </Button>
            </Link>
            <Link href="/sara-berisha">
                <Button>
                    sara-berisha
                </Button>
            </Link>
            <Link href="/bora-zemani">
                <Button>
                    bora-zemani
                </Button>
            </Link>
            <Link href="/alketa-vejsiu">
                <Button>
                    alketa
                </Button>
            </Link>
        </div>
    )
}
