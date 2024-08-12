import Aside from "@/components/shared/Aside";
import { plataformRelatedIcons, userRelatedIcons } from "@/components/shared/Aside/icons";
import Profile from "@/components/shared/Profile";

export default function MyProfilePage() {
    return (
        <>
            <Aside position="right" icons={plataformRelatedIcons} />
            <Profile username="Gabriel"/>      
            <Aside position="left" icons={userRelatedIcons} />
        </>

    )
}