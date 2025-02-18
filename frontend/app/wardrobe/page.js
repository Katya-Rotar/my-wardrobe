import CategoryDisplay from "../components/wardrobe/сategoryDisplay";

export default function CategoryPage() {
  const categories = [
    {
      name: "T-Shirts",
      items: [
        { id: 1, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 2, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 3, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 4, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 5, name: "Black T-Shirt", image: "/black_T-Shirt.png" }
      ],
    },
    {
      name: "T-Shirts",
      items: [
        { id: 1, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 2, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 3, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 4, name: "Black T-Shirt", image: "/black_T-Shirt.png" },
        { id: 5, name: "Black T-Shirt", image: "/black_T-Shirt.png" }
      ],
    },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <CategoryDisplay
          key={index}
          categoryName={category.name}
          items={category.items}
        />
      ))}
    </div>
  );
}

