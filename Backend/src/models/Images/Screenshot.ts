import {
    Column,
    Entity,
    JoinColumn,
    Long,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import Project from "../Project";
  
  @Entity("screenshot_images")
  class Screenshot {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: Long;
  
    @Column({ type: "longblob", nullable: false })
    imageBuffer: Buffer;
  
    @ManyToOne(() => Project, project => project.screenshots)
    @JoinColumn({ name: "project_id" })
    project: Project;
  }
  
  export default Screenshot;
  