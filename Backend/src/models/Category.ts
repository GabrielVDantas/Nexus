import {
  Column,
  Entity,
  JoinTable,
  Long,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Project from "./Project";

export enum Categories {
  ACTION = "Ação",
  ADVENTURE = "Aventura",
  ARCADE = "Arcade",
  BOARD = "Tabuleiro",
  CARD = "Cartas",
  CASINO = "Cassino",
  CASUAL = "Casual",
  EDUCATIONAL = "Educativo",
  MUSIC = "Música",
  PUZZLE = "Quebra-Cabeça",
  RACING = "Corrida",
  RPG = "RPG",
  SIMULATION = "Simulação",
  SPORTS = "Esportes",
  STRATEGY = "Estratégia",
  TRIVIA = "Trívia",
  WORD = "Palavras",
}

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "varchar" })
  name: string;

  @ManyToMany(() => Project, project => project.categories)
  @JoinTable({
    name: "project_categories",
    joinColumn: {
      name: "project_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "category_id",
      referencedColumnName: "id"
    }
  })
  projects: Project[];
}

export default Category;
