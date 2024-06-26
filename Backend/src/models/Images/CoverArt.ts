import {
  Column,
  Entity,
  JoinColumn,
  Long,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Project from "../Project";

@Entity("cover_art_images")
class CoverArt {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "longblob", nullable: false })
  imageBuffer: Buffer;

  @OneToOne(() => Project, project => project.coverArt)
  @JoinColumn({ name: "project_id" })
  project: Project;
}

export default CoverArt;
