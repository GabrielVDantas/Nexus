import { Column, Entity, Long, PrimaryGeneratedColumn } from "typeorm";

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
  WORD = "Palavras",
  TRIVIA = "Trívia",
}

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "varchar" })
  name: string;
}

export default Category;



