// Task 1 — Product Card Design
// Task 2 — Show Only 5 Products
// Task 3 — Price Filter
// Task 4 — Category Filter
// Task 5 — Product Count
// Task 6 — Search Product
// Task 7 — Sort Products by Price
// Task 8 — Dynamic Category Buttons

(function task8() {
  const apiUrl = "https://fakestoreapi.com/products";
  const container = document.querySelector(".apicard") || document.body;

  if (!container.classList.contains("apicard")) {
    container.classList.add("apicard");
  }

  const style = document.createElement("style");
  style.textContent = `
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f6fb;
      color: #111827;
    }

    .apicard {
      max-width: 1200px;
      margin: 40px auto;
      padding: 24px;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
    }

    .fake-store {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .fake-store h1 {
      text-align: center;
      margin: 0;
      font-size: 2.4rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .search-row, .category-buttons, .sort-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }

    .search-row {
      justify-content: flex-start;
      margin-top: 8px;
    }

    .search-row label {
      font-weight: 700;
    }

    .search-row input {
      flex: 1;
      min-width: 180px;
      padding: 12px 14px;
      border: 1px solid #dfe3ec;
      border-radius: 10px;
      font-size: 1rem;
    }

    .search-row button,
    .category-buttons button,
    .sort-buttons button,
    .product-card button {
      border: none;
      border-radius: 10px;
      padding: 10px 16px;
      font-weight: 700;
      cursor: pointer;
      transition: 0.2s ease;
    }

    .search-row button,
    .category-buttons button,
    .sort-buttons button {
      background: #e9eefb;
      color: #1f2937;
    }

    .category-buttons button.active,
    .sort-buttons button.active {
      background: #111827;
      color: #fff;
    }

    .total-products {
      margin: 0;
      text-align: center;
      font-weight: 700;
      font-size: 1.1rem;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-top: 8px;
    }

    .product-card {
      background: #fff;
      border: 1px solid #edf0f6;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
      display: flex;
      flex-direction: column;
    }

    .product-card img {
      width: 100%;
      height: 240px;
      object-fit: contain;
      background: #f9fafb;
      padding: 16px;
      box-sizing: border-box;
    }

    .product-card-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
    }

    .product-card h3 {
      margin: 0;
      font-size: 1.08rem;
      line-height: 1.4;
      min-height: 3.1em;
    }

    .product-category {
      margin: 0;
      color: #58657d;
      font-weight: 700;
      text-transform: capitalize;
      font-size: 0.9rem;
    }

    .product-description {
      margin: 0;
      color: #46536b;
      line-height: 1.5;
      font-size: 0.9rem;
      flex: 1;
    }

    .product-price {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 700;
      color: #111827;
    }

    .product-card button {
      margin-top: auto;
      background: #101828;
      color: #fff;
      width: 100%;
    }

    @media (max-width: 640px) {
      .apicard {
        padding: 18px 14px;
      }

      .fake-store h1 {
        font-size: 1.8rem;
      }
    }
  `;

  document.head.appendChild(style);

  const app = document.createElement("div");
  app.className = "fake-store";
  container.innerHTML = "";
  container.appendChild(app);

  const title = document.createElement("h1");
  title.textContent = "🛒 FAKE STORE";

  const searchRow = document.createElement("div");
  searchRow.className = "search-row";

  const searchLabel = document.createElement("label");
  searchLabel.textContent = "Search Product:";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search product";

  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.textContent = "Search";

  searchRow.append(searchLabel, searchInput, searchButton);

  const categoryButtons = document.createElement("div");
  categoryButtons.className = "category-buttons";

  const sortButtons = document.createElement("div");
  sortButtons.className = "sort-buttons";

  const totalProducts = document.createElement("p");
  totalProducts.className = "total-products";

  const productGrid = document.createElement("div");
  productGrid.className = "products-grid";

  app.append(title, searchRow, categoryButtons, sortButtons, totalProducts, productGrid);

  let jsData = [];
  let activeCategory = "all";
  let activeSort = "";
  let searchTerm = "";

  function getCategoryLabel(category) {
    if (category === "all") return "All";
    if (category === "men's clothing") return "Men's Clothing";
    if (category === "women's clothing") return "Women's Clothing";
    if (category === "jewelery") return "Jewellery";
    if (category === "electronics") return "Electronics";
    return category;
  }

  function renderCategoryButtons() {
    const categories = ["all", "men's clothing", "women's clothing", "jewelery", "electronics"];
    categoryButtons.innerHTML = "";

    categories.forEach((category) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = getCategoryLabel(category);
      btn.classList.toggle("active", activeCategory === category);
      btn.addEventListener("click", () => {
        activeCategory = category;
        renderCategoryButtons();
        renderProducts();
      });
      categoryButtons.appendChild(btn);
    });
  }

  function renderSortButtons() {
    const sortOptions = [
      { key: "low", label: "Low → High" },
      { key: "high", label: "High → Low" }
    ];

    sortButtons.innerHTML = "";
    sortOptions.forEach((option) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = option.label;
      btn.classList.toggle("active", activeSort === option.key);
      btn.addEventListener("click", () => {
        activeSort = activeSort === option.key ? "" : option.key;
        renderSortButtons();
        renderProducts();
      });
      sortButtons.appendChild(btn);
    });
  }

  function buildProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const content = document.createElement("div");
    content.className = "product-card-content";

    const title = document.createElement("h3");
    title.textContent = product.title;

    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = product.category;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = `$${product.price}`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Add to Cart";

    content.append(title, category, description, price, button);
    card.append(image, content);
    return card;
  }

  function renderProducts() {
    let filteredProducts = [...jsData];

    if (activeCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeSort === "low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (activeSort === "high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    totalProducts.textContent = `Total Products: ${filteredProducts.length}`;
    productGrid.innerHTML = "";
    filteredProducts.forEach((product) => {
      productGrid.appendChild(buildProductCard(product));
    });
  }

  searchButton.addEventListener("click", () => {
    searchTerm = searchInput.value.trim();
    renderProducts();
  });

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProducts();
  });

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      jsData = data;
      renderCategoryButtons();
      renderSortButtons();
      renderProducts();
    })
    .catch(() => {
      totalProducts.textContent = "Total Products: 0";
      productGrid.innerHTML = "<p>Unable to load products right now.</p>";
    });
})();
