<template>
  <nav class="search__filter">
    <h3 class="search__filter--list">
      <i class="search__filter--icon fa-solid fa-filter"></i>
      Bộ lọc tìm kiếm
    </h3>
    <ul class="search-list">
      <li class="search-item search-item--active">
        <input class="checkbox" type="checkbox" />
        <a href="#" class="search-item-link">Đồ dùng (&gt;10tr)</a>
      </li>
      <li class="search-item">
        <input type="checkbox" />
        <a href="#" class="search-item-link">Đồ dùng (&gt;=5tr)</a>
      </li>
      <li class="search-item">
        <input type="checkbox" />
        <a href="#" class="search-item-link">Đồ dùng (&gt;=2tr)</a>
      </li>
      <li class="search-item">
        <input type="checkbox" />
        <a href="#" class="search-item-link">Đồ dùng (&gt;=1tr)</a>
      </li>
      <li class="search-item">
        <input type="checkbox" />
        <a href="#" class="search-item-link">Đồ dùng (0đ - 1tr) </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.search__filter {
  border-radius: 2px;
  background-color: var(--white-color);
}

.search__filter--list {
  margin-top: 0;
  font-size: 1.6rem;
  color: var(--text-color);
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.search__filter--icon {
  font-size: 1.4rem;
  margin-right: 4px;
}

.search-list {
  font-size: 1.5rem;
  padding-left: 0;
  list-style: none;
  padding-bottom: 16px;
}

.search-item-link {
  color: var(--text-color);
  position: relative;
  right: 0;
  display: block;
  margin: 8px 30px;
  text-decoration: none;
  transition: right 0.2s;
  top: -22px;
}

.search-item-link:hover {
  color: var(--primary-color) !important;
  right: -4px;
  font-size: 1.7rem;
}

.checkbox {
  margin-top: 20px;
}
</style>
