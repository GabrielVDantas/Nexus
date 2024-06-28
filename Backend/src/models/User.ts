import {
  Column,
  Entity,
  JoinColumn,
  Long,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import Project from "./Project";

@Entity("users")
class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: Long;

  @Column({type: 'varchar', length: 100, nullable: false})
  username: string;

  @Column({type: 'varchar', length: 100, nullable: false})
  email: string;

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({default: null, type: 'longblob'})
  avatar: Buffer;

  @Column({default: null, type: 'text'})
  description: string;

  @Column({default: false})
  active: boolean;

  @OneToMany(() => Project, project => project.user)
  @JoinColumn({name: "user_id"})
  projects: Project[];
}

export default User;
