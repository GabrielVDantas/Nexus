import Category, { Categories } from "../../models/Category";
import categoryRepository from "../../repositories/categoryRepository";

class CategoryService {
  static async categoryService() {
    const nexusCategories = Object.values(Categories);

    for (let name of nexusCategories) {
      const existingCategory = await categoryRepository.findOneBy({ name });

      if (!existingCategory) {
        const newCategory = new Category();
        newCategory.name = name;

        await categoryRepository.save(newCategory);
      }
    }
    console.log("Categorias verificadas!");
  }
}

export default CategoryService;
