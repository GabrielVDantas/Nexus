import Aside from "@/components/shared/Aside";
import { plataformRelatedIcons, userRelatedIcons } from "@/components/shared/Aside/icons";
import Projects from "@/components/shared/Projects";

export default function MyProjectsPage() {
    return (
        <>
            <Aside position="right" icons={plataformRelatedIcons} />
            <Projects />
            <Aside position="left" icons={userRelatedIcons} />
        </>
    )
}