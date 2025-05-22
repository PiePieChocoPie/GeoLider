import { useState, useMemo } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Ноутбук", category: "Электроника" },
  { id: 2, name: "Кофеварка", category: "Бытовая техника" },
  { id: 3, name: "Телефон", category: "Электроника" },
  { id: 4, name: "Пылесос", category: "Бытовая техника" },
  { id: 5, name: "Книга", category: "Книги" },
];

const categories = ["Все", "Электроника", "Бытовая техника", "Книги"];

export const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProducts = useMemo(() => {
    console.log("Фильтрация выполняется...");
    if (selectedCategory === "Все") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Список продуктов</h2>
      <div style={{ marginBottom: "1rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              background: selectedCategory === cat ? "#2196f3" : "#e0e0e0",
              color: selectedCategory === cat ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} style={{ margin: "0.5rem 0" }}>
            {product.name} — <em>{product.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};
