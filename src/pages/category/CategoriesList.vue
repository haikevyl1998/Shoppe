<template>
  <nav class="category">
    <h3 class="category__heading">
      <i class="category__heading-icon fas fa-list"></i>
      Tất cả danh mục
    </h3>
    <ul class="category-list">
      <li class="category-item category-item--active">
        <a href="#" class="category-item-link">Điện thoại</a>
      </li>
      <li class="category-item">
        <a href="#" class="category-item-link">Máy tính bảng</a>
      </li>
      <li class="category-item">
        <a href="#" class="category-item-link">Pin dự phòng</a>
      </li>
      <li class="category-item">
        <a href="#" class="category-item-link">Thẻ nhớ</a>
      </li>
      <li class="category-item">
        <a href="#" class="category-item-link">Sim</a>
      </li>
      <li class="category-item">
        <a href="#" class="category-item-link">Khác</a>
      </li>
      <li class="category-item">
        <a href="#" class="category-item-link">Điện thoại bàn</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.category {
  border-radius: 2px;
  background-color: var(--white-color);
}

.category__heading {
  margin-top: 0;
  font-size: 1.6rem;
  color: var(--text-color);
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.category__heading-icon {
  font-size: 1.4rem;
  margin-right: 4px;
}

.category-list {
  font-size: 1.5rem;
  padding-left: 0;
  list-style: none;
  padding-bottom: 16px;
}

.category-item--active .category-item-link::before {
  content: "";
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border: 4px solid;
  border-color: transparent transparent transparent var(--primary-color);
}

.category-item-link {
  color: var(--text-color);
  position: relative;
  right: 0;
  display: block;
  padding: 8px 30px;
  text-decoration: none;
  transition: right 0.2s;
}

.category-item-link:hover {
  color: var(--primary-color) !important;
  right: -4px;
  font-size: 1.7rem;
}
</style>
