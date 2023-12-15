import UserData from "@/components/userData/UserData";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <UserData />
      <Image src={"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"} alt={""} height={300} width={300} />

    </div>
  )
}
