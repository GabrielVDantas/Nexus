import {
  Column,
  Entity,
  JoinColumn,
  Long,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Category from "./Category";
import User from "./User";
import CoverArt from "./Images/CoverArt";
import Screenshot from "./Images/Screenshot";

@Entity("projects")
class Project {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ type: "decimal", precision: 7, scale: 2, nullable: false })
  goal: number;

  @ManyToOne(() => User, user => user.projects)
  @JoinColumn({name: "user_id"})
  user: User;

  @OneToOne(() => CoverArt, coverArt => coverArt.project)
  @JoinColumn({name: "cover_art_id"})
  coverArt: CoverArt;

  @OneToMany(() => Screenshot, screenshot => screenshot.project)
  @JoinColumn({name: "project_id"})
  screenshots: Screenshot[];

  @ManyToMany(() => Category, category => category.projects)
  categories: Category[];
}

export default Project;
