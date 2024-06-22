import {
  Column,
  Entity,
  Long,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Image from "./Image";

@Entity("projects")
class Project {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ type: "decimal", precision: 7, scale: 2, nullable: false })
  goal: string;

  @Column({ type: "longblob", nullable: true })
  @OneToOne(() => Image, (image) => image.project)
  mainImage: Image;

  @Column({ type: "longblob", nullable: true })
  @OneToMany(() => Image, (image) => image.project)
  descritiveImages: Image[];
}

export default Project;
