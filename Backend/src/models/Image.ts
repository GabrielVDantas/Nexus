import {
  Column,
  Entity,
  Long,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Project from "./Project";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "longblob", nullable: false })
  imageBuffer: Buffer;

  @Column({ type: "longblob", nullable: false })
  @OneToOne(() => Project, (project) => project.mainImage)
  @ManyToOne(() => Project, (project) => project.descritiveImages)
  project: Project;

  @Column({ type: "bigint" })
  projectForeignKey: Long;
}

export default Image;
